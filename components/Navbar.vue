<template>
  <nav class="navbar">
    <div class="navbar-container">
      <NuxtLink to="/" class="navbar-brand">8hrs.xyz</NuxtLink>
      <ul class="navbar-links">
        <li><NuxtLink to="/">Home</NuxtLink></li>
        <li><NuxtLink to="/courses">Courses</NuxtLink></li>
        <li><NuxtLink to="/instructor">Instructor</NuxtLink></li>
      </ul>
    </div>
  </nav>
</template>

<style scoped>
.navbar {
  background: rgba(255, 255, 255, 0.95);
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  position: sticky;
  top: 0;
  z-index: 1000;
  padding: 1rem 2rem;
}

.navbar-container {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.navbar-brand {
  font-size: 1.5rem;
  font-weight: bold;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-decoration: none;
}

.navbar-links {
  display: flex;
  gap: 2rem;
  list-style: none;
}

.navbar-links a {
  text-decoration: none;
  color: #333;
  font-weight: 500;
  transition: color 0.3s ease;
}

.navbar-links a:hover {
  color: #667eea;
}

@media (max-width: 768px) {
  .navbar-links {
    gap: 1rem;
    font-size: 0.9rem;
  }

  .navbar-brand {
    font-size: 1.2rem;
  }
}
</style>
