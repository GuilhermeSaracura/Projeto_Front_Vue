<template>
  <v-app>
    <v-system-bar
        app
        color=#008000
        fixed
      >
        <v-spacer></v-spacer>
        <v-icon>mdi-wifi-strength-4</v-icon>
        <v-icon>mdi-signal-cellular-outline</v-icon>
        <v-icon>mdi-battery</v-icon>
        <span>23:59</span>
  </v-system-bar>
  <v-app-bar
      app
      fixed
      color=#32CD32
      scroll-target="#scrolling-techniques"
    >
      <v-app-bar-nav-icon></v-app-bar-nav-icon>

      <v-app-bar-title>Resumo</v-app-bar-title>

      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-heart</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn>
    </v-app-bar>
    <v-navigation-drawer
        app
        permanent
        expand-on-hover
        left
      >
        <v-list>
          <v-list-item class="px-3">
            <v-list-item-avatar>
              <v-img src="https://media-exp1.licdn.com/dms/image/C4E03AQEJYWvKxxlkEg/profile-displayphoto-shrink_200_200/0/1604628308797?e=1643241600&v=beta&t=ypK_ckM-nouYFc4DkYvKGfwGBCPFJ5SnjLrdsKHJo_Y"></v-img>
            </v-list-item-avatar>
          </v-list-item>

          <v-list-item link>
            <v-list-item-content>
              <v-list-item-title class="text-h12">
                Guilherme Saracura
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>

        <v-divider></v-divider>

        <v-list
          nav
          dense
        >
          <v-list-item link>
            <v-list-item-icon>
              <v-icon>mdi-folder</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Galerias</v-list-item-title>
          </v-list-item>
          <v-list-item link>
            <v-list-item-icon>
              <v-icon>mdi-account-multiple</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Compartilhados comigo</v-list-item-title>
          </v-list-item>
          <v-list-item link>
            <v-list-item-icon>
              <v-icon>mdi-star</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Starred</v-list-item-title>
          </v-list-item>
        </v-list>
    </v-navigation-drawer>
    <v-main>
      <v-content>
        <br><br>
        <p>Atualmente atuando como estagiário de Desenvolvimento de Software na FIT- Instituto de Tecnologia.</p>
        <p>Cursando a graduação em Engenharia da Computação na FACENS, formado na graduação em Engenharia Química 
        e pós-graduação no curso de Especialização em Lean Six Sigma com certificação Black Belt na mesma instituição.</p>
        <p>Um ano e seis meses de experiência na área de TI, exercendo como atividades gestão, manutenção e montagem de equipamentos,
         suporte aos usuários do sistema operacional Windows e manutenção e suporte a infraestrutura de redes. E um ano de experiência como 
         estagiário na área de controle de qualidade e de processos no setor de chapas da CBA, auxiliando a equipe nas análises de causas de 
         desvios dos materiais, promovendo melhorias e realizando projetos internos.</p>
      </v-content>
    </v-main>
     <v-footer
    app
    dark
    padless
  >
    <v-card
      class="flex"
      flat
      tile
      color=#32CD32
    >
      <v-card-title class="teal">
        <strong>Minhas redes sociais:</strong>

        <v-spacer></v-spacer>

          <v-btn
            dark
            class="mx-4"
            icon 
            href = "https://github.com/GuilhermeSaracura" target="_blank"   
            title = "Github"
            >
              <v-icon size="35px">mdi-github</v-icon>
          </v-btn>

          <v-btn
            dark
            class="mx-4"
            icon 
            href = "https://www.instagram.com/guisaracura/" target="_blank"   
            title = "Instagram"
            >
              <v-icon size="35px">mdi-instagram</v-icon>
          </v-btn>

          <v-btn
            dark
            class="mx-4"
            icon 
            href = "https://www.linkedin.com/in/guilhermesaracura" target="_blank"    
            title = "LinkedIn"
            >
              <v-icon size="35px">mdi-linkedin</v-icon>
          </v-btn>

      </v-card-title>

      <v-card-text class="py-2 white--text text-center">
        {{ new Date().getFullYear() }}
      </v-card-text>
    </v-card>
  </v-footer>
  <v-bottom-navigation
    app
    color=#228B22
    horizontal
  >
    <v-btn>
      <span>Recents</span>

      <v-icon>mdi-history</v-icon>
    </v-btn>

    <v-btn>
      <span>Favorites</span>

      <v-icon>mdi-heart</v-icon>
    </v-btn>

    <v-btn>
      <span>Nearby</span>

      <v-icon>mdi-map-marker</v-icon>
    </v-btn>
  </v-bottom-navigation>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  data: () => ({
  }),
};
</script>
