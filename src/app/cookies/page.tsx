import type { Metadata } from "next";
import Link from "next/link";
import { LegalDocument, type LegalSection } from "@/components/legal-document";
import { legalPublication } from "@/config/legal";

export const metadata: Metadata = {
  title: "Cookies e tecnologias",
  description:
    "Como o site da S&D utiliza recursos do navegador e tecnologias de hospedagem.",
  alternates: { canonical: "/cookies" },
  robots: { index: true, follow: true },
};
const sections: LegalSection[] = [
  {
    id: "conceito",
    title: "O que são cookies",
    content: (
      <p>
        Cookies são pequenos registros que um site pode armazenar no navegador.
        Existem também outros recursos de armazenamento, como localStorage e
        sessionStorage, além do cache que ajuda a carregar arquivos já
        visitados. Esses mecanismos têm finalidades distintas.
      </p>
    ),
  },
  {
    id: "uso-atual",
    title: "O que usamos hoje",
    content: (
      <>
        <p>
          O código desta versão do site não grava cookies próprios, não armazena
          preferências em localStorage ou sessionStorage e não inclui pixels
          publicitários ou ferramentas de análise de audiência.
        </p>
        <p>
          Os controles do estúdio interativo utilizam somente o estado
          temporário da página. Recarregar o documento restaura a configuração
          inicial; a aplicação não registra um histórico dessas escolhas.
        </p>
        <p>
          O navegador pode manter imagens, fontes e outros arquivos em cache. A
          hospedagem também pode utilizar mecanismos técnicos de proteção e
          entrega, conforme suas configurações. Isso é diferente de um perfil de
          publicidade criado pela S&amp;D.
        </p>
      </>
    ),
  },
  {
    id: "escolhas",
    title: "Suas escolhas",
    content: (
      <>
        <p>
          Você pode revisar dados de sites, limpar o cache e definir permissões
          nas configurações de privacidade do navegador. Bloqueios amplos podem
          afetar recursos técnicos de alguns sites.
        </p>
        <p>
          Como esta aplicação não implementa categorias opcionais de
          rastreamento, não exibe um banner com opções de consentimento que não
          tenham função. Se essa situação mudar, a informação e os controles
          necessários deverão ser apresentados antes da ativação das tecnologias
          correspondentes.
        </p>
      </>
    ),
  },
  {
    id: "saiba-mais",
    title: "Mais informações",
    content: (
      <>
        <p>
          As informações sobre hospedagem, dados técnicos e direitos estão no{" "}
          <Link href="/privacidade">Aviso de Privacidade</Link>. Esta página
          será atualizada quando houver mudanças relevantes nas tecnologias
          utilizadas.
        </p>
        <p>Atualização desta versão: {legalPublication.updated}.</p>
      </>
    ),
  },
];
export default function CookiesPage() {
  return (
    <LegalDocument
      title="Cookies e tecnologias"
      introduction="O que fica no navegador, o que é temporário e quais recursos fazem parte da experiência atual."
      path="/cookies"
      sections={sections}
    />
  );
}
