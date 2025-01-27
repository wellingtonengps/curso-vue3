<template>
  <div>
    <v-text-field
      label="Add Task"
      v-model="task.title"
      @keyup.enter="addTask"
    ></v-text-field>

    <v-list lines="three" select-strategy="leaf">
      <v-list-subheader>General</v-list-subheader>
      <v-list-item
        v-for="item in tasks"
        :key="item.value"
        :subtitle="item.description"
        :title="item.title"
        :value="item.value"
      >
        <template v-slot:prepend="{ isSelected }">
          <v-list-item-action start>
            <v-checkbox-btn :model-value="isSelected"></v-checkbox-btn>
          </v-list-item-action>
        </template>
        <template v-slot:append>
          <v-menu open-on-hover>
            <template v-slot:activator="{ props }">
              <v-btn
                color="grey-lighten-1"
                icon="mdi-dots-vertical"
                variant="text"
                v-bind="props"
              ></v-btn>
            </template>

            <v-list>
              <v-list-item>
                <v-list-item-title>Editar</v-list-item-title>
              </v-list-item>

              <v-list-item>
                <v-list-item-title>Deletar</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>
        </template>
      </v-list-item>
    </v-list>
  </div>
</template>

<script setup>
import { ref } from "vue";

const tasks = ref([
  {
    title: "Estudar vue",
    description: "Estudar Vue com Vuetify...",
  },
  {
    title: "Ler livro",
    description: "Ler livro do mês",
  },
]);

const task = ref({
  title: "",
  description: "",
});

const addTask = () => {
  tasks.value.push({
    title: task.value.title,
    description: task.value.description,
  });
  task.value = {
    title: "",
    description: "",
  };
};
</script>

<style></style>
