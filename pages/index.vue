<template>
  <div class="page-content">
    <div class="container">
      <div class="hero">
        <h1 style="font-size: 3rem; color: white; margin-bottom: 1rem">
          Welcome to 8hrs.xyz
        </h1>
        <p
          style="
            font-size: 1.2rem;
            color: rgba(255, 255, 255, 0.9);
            margin-bottom: 2rem;
          "
        >
          Master in-demand tech skills with our comprehensive courses
        </p>
        <NuxtLink to="/courses">
          <button
            style="
              background: white;
              color: #667eea;
              padding: 1rem 2rem;
              font-size: 1.1rem;
              border: none;
              border-radius: 5px;
              cursor: pointer;
              font-weight: bold;
              transition: all 0.3s ease;
            "
            onmouseover="this.style.transform = 'scale(1.05)'"
            onmouseout="this.style.transform = 'scale(1)'"
          >
            Explore Courses
          </button>
        </NuxtLink>
      </div>

      <div
        style="
          margin-top: 4rem;
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 2rem;
        "
      >
        <div
          style="
            background: white;
            padding: 2rem;
            border-radius: 10px;
            text-align: center;
            box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
          "
        >
          <h3 style="color: #667eea; margin-bottom: 1rem">9+ Courses</h3>
          <p>Comprehensive curriculum covering all tech domains</p>
        </div>
        <div
          style="
            background: white;
            padding: 2rem;
            border-radius: 10px;
            text-align: center;
            box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
          "
        >
          <h3 style="color: #667eea; margin-bottom: 1rem">Expert Instructor</h3>
          <p>Learn from industry professionals with years of experience</p>
        </div>
        <div
          style="
            background: white;
            padding: 2rem;
            border-radius: 10px;
            text-align: center;
            box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
          "
        >
          <h3 style="color: #667eea; margin-bottom: 1rem">Self-Paced</h3>
          <p>Learn at your own pace, anytime, anywhere</p>
        </div>
      </div>
    </div>
  </div>
</template>

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

.hero {
  text-align: center;
  padding: 3rem 0;
}

@media (max-width: 768px) {
  .hero h1 {
    font-size: 2rem !important;
  }

  .hero p {
    font-size: 1rem !important;
  }
}
</style>
