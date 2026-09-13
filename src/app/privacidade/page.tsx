import type { Metadata } from "next";
import Link from "next/link";
import { LegalDocument, type LegalSection } from "@/components/legal-document";

export const metadata: Metadata = {
  title: "Privacidade",
  description:
    "Informações sobre a navegação, a infraestrutura e a privacidade no site da S&D Technologies.",
  alternates: { canonical: "/privacidade" },
  robots: { index: true, follow: true },
};
const sections: LegalSection[] = [
  {
    id: "sobre-este-aviso",
    title: "Sobre este aviso",
    content: (
      <>
        <p>
          Este aviso descreve o funcionamento do portfólio da S&amp;D, onde
          Samuel e David apresentam seus trabalhos independentes de design e
          desenvolvimento web. Ele não substitui informações específicas de
          futuros serviços, contratos ou ambientes que venham a tratar outros
          dados.
        </p>
      </>
    ),
  },
  {
    id: "informacoes",
    title: "Informações da navegação",
    content: (
      <>
        <p>
          O site não oferece cadastro, área de conta, formulário de contato,
          envio de arquivos ou pagamento. Não solicitamos nome, e-mail ou
          telefone para acessar as páginas.
        </p>
        <p>
          A entrega e a proteção das páginas envolvem informações técnicas, como
          endereço IP, data e hora da requisição, página solicitada,
          características do navegador e respostas do servidor. A infraestrutura
          de hospedagem pode processar registros dessa natureza para operar e
          proteger o serviço.
        </p>
        <p>
          As escolhas de formato, cor e peso no estúdio interativo ficam no
          estado temporário da página. A aplicação não envia essas escolhas a um
          servidor nem as grava em armazenamento persistente do navegador.
        </p>
      </>
    ),
  },
  {
    id: "finalidades",
    title: "Finalidades do tratamento",
    content: (
      <>
        <p>
          As informações técnicas são utilizadas para disponibilizar as páginas,
          manter a segurança, investigar falhas e prevenir abusos. O tratamento
          deve se limitar ao necessário para essas finalidades.
        </p>
        <p>
          Conforme o caso, aplicam-se as hipóteses legais de cumprimento de
          obrigação legal ou regulatória e de legítimo interesse na operação e
          segurança do site, sempre observados os direitos e as expectativas
          legítimas do visitante. Não utilizamos a navegação para criar perfis
          de publicidade.
        </p>
      </>
    ),
  },
  {
    id: "infraestrutura",
    title: "Hospedagem e terceiros",
    content: (
      <>
        <p>
          O site é hospedado na Vercel, que participa da entrega das páginas e
          de sua infraestrutura técnica. Esse serviço pode envolver
          processamento fora do Brasil. As regras e salvaguardas pertinentes ao
          tratamento internacional devem ser observadas conforme a legislação
          aplicável e os instrumentos contratuais do provedor.
        </p>
        <p>
          Consulte também o{" "}
          <a
            href="https://vercel.com/legal/privacy-notice"
            target="_blank"
            rel="noopener noreferrer"
          >
            Aviso de Privacidade da Vercel
          </a>{" "}
          e seu{" "}
          <a
            href="https://vercel.com/legal/dpa"
            target="_blank"
            rel="noopener noreferrer"
          >
            aditivo de tratamento de dados
          </a>
          .
        </p>
        <p>
          As fontes e imagens da interface são servidas junto com o site. A
          aplicação não incorpora ferramentas de publicidade, pixels de redes
          sociais ou serviços de análise de audiência. Eventuais divulgações
          exigidas por autoridade competente devem observar os limites legais.
        </p>
      </>
    ),
  },
  {
    id: "retencao",
    title: "Conservação e segurança",
    content: (
      <>
        <p>
          As escolhas do experimento não são salvas pela aplicação. Registros
          técnicos da infraestrutura podem seguir os prazos e configurações do
          provedor e as exigências legais aplicáveis. Não estabelecemos aqui um
          prazo único para registros que não são armazenados diretamente pela
          aplicação.
        </p>
        <p>
          A navegação utiliza HTTPS e medidas técnicas para reduzir acessos
          indevidos e exposição desnecessária. Nenhum ambiente conectado é
          isento de riscos; medidas de proteção devem ser revistas quando o
          funcionamento do site mudar.
        </p>
      </>
    ),
  },
  {
    id: "direitos",
    title: "Seus direitos",
    content: (
      <>
        <p>
          Nos termos da LGPD e conforme a hipótese aplicável, você pode
          solicitar confirmação de tratamento, acesso, correção, informações
          sobre compartilhamento, anonimização, bloqueio ou eliminação de dados,
          além de exercer os demais direitos previstos em lei. Também pode
          questionar um tratamento e peticionar à autoridade competente.
        </p>
        <p>
          Informações oficiais sobre proteção de dados e o exercício dos seus
          direitos estão disponíveis na{" "}
          <a
            href="https://www.gov.br/anpd/pt-br"
            target="_blank"
            rel="noopener noreferrer"
          >
            Autoridade Nacional de Proteção de Dados
          </a>
          .
        </p>
      </>
    ),
  },
  {
    id: "cookies",
    title: "Cookies e mudanças",
    content: (
      <>
        <p>
          Consulte a página de{" "}
          <Link href="/cookies">Cookies e tecnologias</Link> para entender o
          armazenamento no navegador. Este aviso será revisto se forem
          adicionados formulários, ferramentas de análise, publicidade ou outras
          funcionalidades que alterem o tratamento de dados.
        </p>
        <p>A data de atualização no início identifica a versão do documento.</p>
      </>
    ),
  },
];
export default function PrivacyPage() {
  return (
    <LegalDocument
      title="Privacidade"
      introduction="Uma visão clara sobre as informações envolvidas na sua visita e sobre o funcionamento atual deste site."
      path="/privacidade"
      sections={sections}
    />
  );
}
