import { NextResponse } from 'next/server'
import ZAI from 'z-ai-web-dev-sdk'
import fs from 'fs'
import path from 'path'

export async function POST(request: Request) {
  try {
    const { prompt, filename, size = '1440x720' } = await request.json()

    if (!prompt || !filename) {
      return NextResponse.json(
        { error: 'Prompt and filename are required' },
        { status: 400 }
      )
    }

    // Create output directory if it doesn't exist
    const publicDir = path.join(process.cwd(), 'public', 'images')
    if (!fs.existsSync(publicDir)) {
      fs.mkdirSync(publicDir, { recursive: true })
    }

    // Generate image using SDK
    const zai = await ZAI.create()

    const response = await zai.images.generations.create({
      prompt: prompt,
      size: size
    })

    const imageBase64 = response.data[0].base64
    const buffer = Buffer.from(imageBase64, 'base64')

    // Save image
    const outputPath = path.join(publicDir, filename)
    fs.writeFileSync(outputPath, buffer)

    return NextResponse.json({
      success: true,
      path: `/images/${filename}`,
      filename: filename,
      size: buffer.length
    })
  } catch (error) {
    console.error('Error generating image:', error)
    return NextResponse.json(
      { error: error instanceof Error ? error.message : 'Failed to generate image' },
      { status: 500 }
    )
  }
}
