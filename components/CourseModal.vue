<template>
  <div v-if="course" class="modal-overlay" @click.self="$emit('close')">
    <div class="modal">
      <div class="modal-header">
        <h2 class="modal-title">{{ course.title }}</h2>
        <button class="close-btn" @click="$emit('close')">×</button>
      </div>
      <div class="modal-body">
        <p>{{ course.description }}</p>
        <p style="margin-top: 2rem; font-style: italic; color: #667eea">
          Instructor: Moses Mbadi
        </p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Course } from "~/data/courses";

defineProps<{
  course: Course | null;
}>();

defineEmits<{
  close: [];
}>();
</script>

<style scoped>
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2000;
}

.modal {
  background: white;
  border-radius: 10px;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.2);
  max-width: 600px;
  width: 90%;
  max-height: 90vh;
  overflow-y: auto;
}

.modal-header {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.modal-title {
  font-size: 1.5rem;
  font-weight: bold;
}

.close-btn {
  background: none;
  border: none;
  color: white;
  font-size: 1.5rem;
  cursor: pointer;
  transition: opacity 0.3s ease;
}

.close-btn:hover {
  opacity: 0.7;
}

.modal-body {
  padding: 2rem;
}

.modal-body p {
  margin-bottom: 1rem;
  line-height: 1.6;
}
</style>
