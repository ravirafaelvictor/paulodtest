
import { Section } from "@/components/ui/section-wrapper";
import Link from "next/link";

export default function PrivacyPolicy() {
    return (
        <main className="bg-slate-950 min-h-screen text-slate-300">
            <Section id="privacidade" className="pt-32 pb-20">
                <div className="max-w-4xl mx-auto space-y-8">
                    <div className="mb-12">
                        <h1 className="text-4xl font-bold text-white mb-4">Política de Privacidade</h1>
                        <p className="text-slate-400">Última atualização: {new Date().toLocaleDateString('pt-BR')}</p>
                    </div>

                    <div className="space-y-4">
                        <h2 className="text-2xl font-semibold text-white">1. Coleta e Uso de Informações</h2>
                        <p>
                            Nós respeitamos a sua privacidade. Não coletamos informações pessoais sobre você, a menos que você as forneça voluntariamente,
                            por exemplo, ao entrar em contato conosco através de links para WhatsApp ou e-mail.
                        </p>
                    </div>

                    <div className="space-y-4">
                        <h2 className="text-2xl font-semibold text-white">2. Cookies e Tecnologias de Rastreamento</h2>
                        <p>
                            Este site pode usar cookies para melhorar a experiência do usuário. Cookies são pequenos arquivos salvos no seu dispositivo que rastreiam,
                            salvam e armazenam informações sobre suas interações e uso do site. Você pode negar o uso de cookies nas configurações do seu navegador.
                        </p>
                    </div>

                    <div className="space-y-4">
                        <h2 className="text-2xl font-semibold text-white">3. Compartilhamento de Dados</h2>
                        <p>
                            Nós não vendemos, trocamos ou transferimos suas informações pessoais para terceiros. Isso não inclui terceiros de confiança
                            que nos auxiliam na operação do nosso site ou na condução dos nossos negócios, desde que essas partes concordem em manter essas informações confidenciais.
                        </p>
                    </div>

                    <div className="space-y-4">
                        <h2 className="text-2xl font-semibold text-white">4. Segurança</h2>
                        <p>
                            Implementamos medidas de segurança para manter a segurança das suas informações pessoais. No entanto, lembre-se de que nenhum método de transmissão
                            pela Internet ou método de armazenamento eletrônico é 100% seguro.
                        </p>
                    </div>

                    <div className="mt-12 pt-8 border-t border-slate-800">
                        <p>
                            Se você tiver alguma dúvida sobre nossa Política de Privacidade, entre em contato conosco.
                        </p>
                        <div className="mt-4">
                            <Link href="/#contato" className="text-primary hover:underline">
                                Voltar para o site
                            </Link>
                        </div>
                    </div>
                </div>
            </Section>
        </main>
    );
}
