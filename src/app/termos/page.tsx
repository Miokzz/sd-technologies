import { pageMetadata } from "@/config/metadata";
import Link from "next/link";
import { LegalDocument, type LegalSection } from "@/components/legal-document";

export const metadata = pageMetadata(
  "Termos de uso",
  "Condições de uso do portfólio de Samuel e David, S&D Technologies.",
  "/termos",
);
const sections: LegalSection[] = [
  {
    id: "sobre-o-site",
    title: "Sobre este site",
    content: (
      <>
        <p>
          S&amp;D Technologies é o nome usado por Samuel e David para apresentar
          seus trabalhos independentes de design e desenvolvimento web.
        </p>
        <p>
          O site apresenta a S&amp;D, seus serviços de design e desenvolvimento
          web e uma demonstração interativa de sua identidade. Estes termos se
          referem à navegação e ao uso desses conteúdos.
        </p>
      </>
    ),
  },
  {
    id: "uso",
    title: "Uso responsável",
    content: (
      <>
        <p>
          Você pode consultar os conteúdos e utilizar os recursos interativos
          para conhecer nosso trabalho. Pedimos que não utilize o site para
          práticas ilícitas, tentativa de acesso não autorizado, disseminação de
          código malicioso ou ações que prejudiquem sua segurança e
          disponibilidade.
        </p>
        <p>
          Os recursos de acessibilidade do navegador, mecanismos de busca e
          ferramentas legítimas de leitura podem ser utilizados normalmente.
        </p>
      </>
    ),
  },
  {
    id: "conteudos",
    title: "Marca e conteúdos",
    content: (
      <>
        <p>
          A marca S&amp;D Technologies, sua identidade visual e os conteúdos
          próprios do site pertencem aos respectivos titulares. O acesso não
          transfere direitos sobre esses materiais nem autoriza apresentar a
          marca ou o trabalho da S&amp;D como se fossem de terceiros.
        </p>
        <p>
          Usos permitidos pela legislação permanecem preservados. Fontes,
          bibliotecas e outros componentes de terceiros continuam sujeitos às
          respectivas licenças.
        </p>
      </>
    ),
  },
  {
    id: "demonstracao",
    title: "A demonstração interativa",
    content: (
      <>
        <p>
          O estúdio interativo é um experimento autoral da S&amp;D. Ele
          demonstra escolhas de composição, formato, cor e tipografia; não
          representa um projeto entregue a cliente nem resultados comerciais
          obtidos.
        </p>
        <p>
          As alterações feitas nos controles são temporárias e não constituem
          pedido, orçamento, arquivo contratado ou obrigação de entrega.
        </p>
      </>
    ),
  },
  {
    id: "contratacao",
    title: "Contratação de serviços",
    content: (
      <>
        <p>
          A navegação não gera contratação, cobrança ou compromisso de compra.
          Este site não realiza pagamentos nem recebe pedidos por formulário.
        </p>
        <p>
          Um projeto depende de proposta e contrato específicos. Escopo,
          entregáveis, investimento, prazo, revisões, responsabilidades sobre
          conteúdo, licenças, acessos, propriedade intelectual, suporte e
          condições de cancelamento devem ser definidos nesses documentos antes
          do início do trabalho.
        </p>
        <p>
          As descrições de serviços orientam a avaliação inicial. Não constituem
          garantia de posição em buscadores, volume de vendas ou resultado
          financeiro. Direitos assegurados pela legislação, inclusive os de
          consumidores quando aplicáveis, permanecem preservados.
        </p>
      </>
    ),
  },
  {
    id: "disponibilidade",
    title: "Disponibilidade e links",
    content: (
      <>
        <p>
          Trabalhamos para manter as informações corretas e o site funcionando.
          Atualizações, manutenção, falhas de conexão ou eventos externos podem
          ocasionar interrupções. Informações sobre serviços podem ser
          atualizadas, sem alterar por si só contratos já celebrados.
        </p>
        <p>
          Links para fontes e serviços externos levam a ambientes administrados
          por terceiros, com regras e políticas próprias. Nenhuma disposição
          deste documento exclui responsabilidades que não possam ser afastadas
          pela legislação aplicável.
        </p>
      </>
    ),
  },
  {
    id: "privacidade",
    title: "Privacidade",
    content: (
      <p>
        O tratamento de informações de navegação está descrito no{" "}
        <Link href="/privacidade">Aviso de Privacidade</Link>. O uso de cookies
        e mecanismos semelhantes é explicado na página{" "}
        <Link href="/cookies">Cookies e tecnologias</Link>. A simples leitura
        destes termos não representa consentimento para publicidade ou
        rastreamento.
      </p>
    ),
  },
  {
    id: "atualizacoes",
    title: "Atualizações e legislação",
    content: (
      <>
        <p>
          Este documento pode ser atualizado para refletir mudanças no site. A
          data no início da página identifica a versão disponível. Alterações
          não modificam retroativamente condições contratuais já acordadas.
        </p>
        <p>
          Aplicam-se as leis brasileiras, respeitadas as normas obrigatórias e
          os direitos do visitante. Este documento não impõe renúncia a direitos
          nem eleição de foro que contrarie a legislação aplicável.
        </p>
      </>
    ),
  },
];
export default function TermsPage() {
  return (
    <LegalDocument
      title="Termos de uso"
      introduction="As condições para conhecer nosso trabalho e utilizar este site. Sem contratação automática e com respeito aos seus direitos."
      path="/termos"
      sections={sections}
    />
  );
}
