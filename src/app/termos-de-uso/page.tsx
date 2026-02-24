
import { Section } from "@/components/ui/section-wrapper";
import Link from "next/link";

export default function TermsOfUse() {
    return (
        <main className="bg-slate-950 min-h-screen text-slate-300">
            <Section id="termos" className="pt-32 pb-20">
                <div className="max-w-4xl mx-auto space-y-8">
                    <div className="mb-12">
                        <h1 className="text-4xl font-bold text-white mb-4">Termos de Uso</h1>
                        <p className="text-slate-400">Última atualização: {new Date().toLocaleDateString('pt-BR')}</p>
                    </div>

                    <div className="space-y-4">
                        <h2 className="text-2xl font-semibold text-white">1. Aceitação dos Termos</h2>
                        <p>
                            Ao acessar e usar este site, você aceita e concorda em estar vinculado aos termos e disposições deste contrato.
                            Além disso, ao usar os serviços particulares deste site, você deve estar sujeito a todas as regras ou diretrizes publicadas aplicáveis a esses serviços.
                        </p>
                    </div>

                    <div className="space-y-4">
                        <h2 className="text-2xl font-semibold text-white">2. Uso do Site</h2>
                        <p>
                            Este site e seu conteúdo são de propriedade exclusiva de Paulo Dias. É proibida a reprodução, distribuição,
                            exibição ou transmissão do conteúdo deste site sem autorização prévia por escrito.
                        </p>
                    </div>

                    <div className="space-y-4">
                        <h2 className="text-2xl font-semibold text-white">3. Isenção de Responsabilidade</h2>
                        <p>
                            As informações contidas neste site são apenas para fins informativos. Embora nos esforcemos para manter as informações
                            atualizadas e corretas, não fazemos representações ou garantias de qualquer tipo, expressas ou implícitas, sobre a integridade,
                            precisão, confiabilidade, adequação ou disponibilidade em relação ao site ou às informações.
                        </p>
                    </div>

                    <div className="space-y-4">
                        <h2 className="text-2xl font-semibold text-white">4. Alterações nos Termos</h2>
                        <p>
                            Reservamo-nos o direito de modificar estes termos a qualquer momento. Você deve verificar esta página periodicamente
                            para garantir que entenda os termos atuais.
                        </p>
                    </div>

                    <div className="mt-12 pt-8 border-t border-slate-800">
                        <p>
                            Se você tiver alguma dúvida sobre estes Termos de Uso, entre em contato conosco através dos canais disponíveis no site.
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
