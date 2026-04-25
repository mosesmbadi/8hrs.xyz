<template>
  <div class="page-content">
    <div class="instructor-container">
      <div class="instructor-card">
        <div class="instructor-header">
          <img
            v-if="instructorImage"
            :src="instructorImage"
            alt="Moses Mbadi"
            class="instructor-image"
          />
          <div v-else class="instructor-image-placeholder">Photo</div>
          <h1 class="instructor-name">Moses Mbadi</h1>
          <p class="instructor-tagline">Tech Educator & Founder</p>
        </div>
        <div class="instructor-bio">
          <p>
            <strong
              >I help Africans break into tech — from zero to software
              engineer</strong
            >
          </p>
          <p style="margin-top: 1rem">
            <strong>Founder: Soma Stories</strong>
          </p>
          <p style="margin-top: 1rem">
            With a passion for making quality tech education accessible to
            everyone, especially across Africa, I have dedicated myself to
            creating comprehensive courses that cover everything from the
            fundamentals to advanced concepts. My teaching philosophy focuses on
            practical, hands-on learning that prepares students for real-world
            challenges in the tech industry.
          </p>

          <div class="social-links">
            <a
              href="https://www.linkedin.com/in/moses-mbadi-0b8500198/"
              target="_blank"
              class="social-link"
            >
              LinkedIn
            </a>
            <a
              href="https://x.com/mosesmbadi"
              target="_blank"
              class="social-link"
            >
              X (Twitter)
            </a>
            <a
              href="https://www.facebook.com/mbadi.107483"
              target="_blank"
              class="social-link"
            >
              Facebook
            </a>
            <a
              href="https://www.instagram.com/mbadimoses/"
              target="_blank"
              class="social-link"
            >
              Instagram
            </a>
            <a
              href="https://www.youtube.com/@mosesmbadi"
              target="_blank"
              class="social-link"
            >
              YouTube
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const instructorImage = ref("/IMG_3668.jpg");
</script>

<style scoped>
.page-content {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  min-height: 100vh;
  padding-top: 2rem;
  padding-bottom: 2rem;
}

.instructor-container {
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
}

.instructor-card {
  background: white;
  border-radius: 10px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  overflow: hidden;
}

.instructor-header {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  padding: 2rem;
  text-align: center;
  color: white;
}

.instructor-image {
  width: 200px;
  height: 200px;
  border-radius: 50%;
  margin: 0 auto 1rem;
  object-fit: cover;
  border: 4px solid white;
}

.instructor-image-placeholder {
  width: 200px;
  height: 200px;
  border-radius: 50%;
  margin: 0 auto 1rem;
  background: rgba(255, 255, 255, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  border: 4px solid white;
}

.instructor-name {
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
}

.instructor-tagline {
  font-size: 1.1rem;
  opacity: 0.9;
}

.instructor-bio {
  padding: 2rem;
}

.instructor-bio p {
  margin-bottom: 1rem;
  line-height: 1.6;
  color: #333;
}

.social-links {
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 2rem;
}

.social-link {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1rem;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  text-decoration: none;
  border-radius: 5px;
  transition: opacity 0.3s ease;
  font-weight: 500;
}

.social-link:hover {
  opacity: 0.9;
}

@media (max-width: 768px) {
  .instructor-image {
    width: 150px;
    height: 150px;
  }

  .instructor-image-placeholder {
    width: 150px;
    height: 150px;
  }

  .instructor-name {
    font-size: 1.5rem;
  }

  .social-links {
    gap: 0.5rem;
  }

  .social-link {
    font-size: 0.9rem;
    padding: 0.5rem 0.75rem;
  }
}
</style>
