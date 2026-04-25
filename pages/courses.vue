<template>
  <div class="page-content">
    <div class="container">
      <h1 class="page-title">Our Courses</h1>
      <div class="courses-grid">
        <CourseCard
          v-for="course in courses"
          :key="course.id"
          :course="course"
          @select="selectCourse"
        />
      </div>
    </div>

    <CourseModal :course="selectedCourse" @close="selectedCourse = null" />
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { courses } from "~/data/courses";
import type { Course } from "~/data/courses";

const selectedCourse = ref<Course | null>(null);

const selectCourse = (course: Course) => {
  selectedCourse.value = course;
};
</script>

<style scoped>
.page-content {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  min-height: 100vh;
  padding-top: 2rem;
  padding-bottom: 2rem;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
}

.page-title {
  font-size: 2.5rem;
  font-weight: bold;
  color: white;
  margin-bottom: 2rem;
  text-align: center;
}

.courses-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
}

@media (max-width: 768px) {
  .page-title {
    font-size: 2rem;
  }

  .courses-grid {
    grid-template-columns: 1fr;
  }
}
</style>
