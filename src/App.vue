<script setup>
import { ref } from 'vue'

const drawer = ref(true);
const rail = ref(true);
const fav = ref(true)
const menu = ref(false)
const message = ref(false)
const hints = ref(true)

const items = ref(
[
  { title: 'Ajustes' },
  { title: 'Cerrar sesión' },
]
);
</script>

<template>
  <v-app>
    <v-navigation-drawer
        v-model="drawer"
        temporary
      >
        <v-list-item
          class="py-4"
          prepend-avatar="https://media-bog2-2.cdn.whatsapp.net/v/t61.24694-24/459489040_1253904845781616_2590974964533608336_n.jpg?ccb=11-4&oh=01_Q5AaIF7IsSirBl0sQA1Jv20pFy3pTuO1X-X0Ybz9mTleoe_3&oe=673B49BD&_nc_sid=5e03e0&_nc_cat=111"
          title="Mafe Valencia"
        ></v-list-item>

        <v-divider></v-divider>

        <v-list density="compact" nav>
          <v-list-item prepend-icon="mdi-view-dashboard" title="Dashboard" value="home"></v-list-item>
          <v-list-item prepend-icon="mdi-forum" title="Comunidad" value="about"></v-list-item>
        </v-list>
      </v-navigation-drawer>
    <v-app-bar app :elevation="2">
      <template v-slot:prepend>
        <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      </template>

      <v-app-bar-title>Hack Academy</v-app-bar-title>

      <template v-slot:append>

        <v-menu
          v-model="menu"
          :close-on-content-click="false"
          location="end">
          <template v-slot:activator="{ props }">
            <v-badge v-bind="props" :content="5" color="red" floating>
              <v-icon>mdi-bell</v-icon>
            </v-badge>
          </template>

          <v-card min-width="250">
            <v-list>
              <v-list-item
                prepend-avatar="https://media-bog2-2.cdn.whatsapp.net/v/t61.24694-24/459489040_1253904845781616_2590974964533608336_n.jpg?ccb=11-4&oh=01_Q5AaIF7IsSirBl0sQA1Jv20pFy3pTuO1X-X0Ybz9mTleoe_3&oe=673B49BD&_nc_sid=5e03e0&_nc_cat=111"
                subtitle="Nivel: Aprendíz"
                title="Mafe Valencia"
              >
                <template v-slot:append>
                  <v-btn
                    :class="fav ? 'text-red' : ''"
                    icon="mdi-school"
                    variant="text"
                    @click="fav = !fav"
                  ></v-btn>
                </template>
              </v-list-item>
            </v-list>

            <v-divider></v-divider>

            <v-list>
              <v-list-item>
                <v-card
                  class="mx-auto"
                  subtitle="Motivate a seguir estudiando"
                  title="Sigue estudiando">
                  <template v-slot:prepend>
                    <v-icon color="primary" icon="mdi-account"></v-icon>
                  </template>
                  <template v-slot:append>
                    <v-icon color="success" icon="mdi-check"></v-icon>
                  </template>
                </v-card>
              </v-list-item>

              <v-list-item>
                <v-card
                  class="mx-auto"
                  subtitle="Gana premios en equipo"
                  title="Nueva Hackatón">
                  <template v-slot:prepend>
                    <v-icon color="primary" icon="mdi-trophy"></v-icon>
                  </template>
                  <template v-slot:append>
                    <v-icon color="success" icon="mdi-check"></v-icon>
                  </template>
                </v-card>
              </v-list-item>
            </v-list>

            <!-- <v-card-actions>
              <v-spacer></v-spacer>

              <v-btn
                variant="text"
                @click="menu = false"
              >
                Cancel
              </v-btn>
              <v-btn
                color="primary"
                variant="text"
                @click="menu = false"
              >
                Save
              </v-btn>
            </v-card-actions> -->
          </v-card>
        </v-menu>

        <v-menu transition="scale-transition">
          <template v-slot:activator="{ props }">
            <v-btn v-bind="props" color="primary" icon="mdi-dots-vertical"/>
          </template>

          <v-list>
            <v-list-item
              v-for="(item, i) in items"
              :key="i">
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </template>
    </v-app-bar>

    <v-main>
      <v-container>
        <router-view v-slot="{ Component, route }">
          <transition name="slide-fade">
            <component :is="Component" :key="route.name" />
          </transition>
        </router-view>
      </v-container>
    </v-main>
    <v-bottom-navigation>
      <v-btn value="recent" :to="{ name: 'roadmap' }">
        <v-icon>mdi-book-open-blank-variant</v-icon>

        <span>Roadmap</span>
      </v-btn>

      <v-btn value="favorites" :to="{ name: 'home' }">
        <v-icon>mdi-home</v-icon>

        <span>Dashboard</span>
      </v-btn>

      <v-btn value="nearby" :to="{ name: 'hackaton' }">
        <v-icon>mdi-trophy</v-icon>

        <span>Hackatón</span>
      </v-btn>
    </v-bottom-navigation>
  </v-app>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
