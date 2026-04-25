<template>
  <div class="course-card" @click="$emit('select', course)">
    <div class="course-card-header">
      <h3 class="course-card-title">{{ course.title }}</h3>
    </div>
    <div class="course-card-body">
      <p>Click to learn more</p>
      <button class="course-btn">View Course</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Course } from "~/data/courses";

defineProps<{
  course: Course;
}>();

defineEmits<{
  select: [course: Course];
}>();
</script>

<style scoped>
.course-card {
  background: white;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;
  cursor: pointer;
}

.course-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 6px 20px rgba(102, 126, 234, 0.3);
}

.course-card-header {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 2rem;
  text-align: center;
}

.course-card-title {
  font-size: 1.3rem;
  font-weight: bold;
}

.course-card-body {
  padding: 1.5rem;
  text-align: center;
}

.course-btn {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border: none;
  padding: 0.75rem 1.5rem;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1rem;
  font-weight: 500;
  transition: opacity 0.3s ease;
  margin-top: 0.5rem;
}

.course-btn:hover {
  opacity: 0.9;
}
</style>
