document.addEventListener("DOMContentLoaded", () => {
  // Mobile Menu Toggle
  const hamburger = document.querySelector(".hamburger")
  const navMenu = document.querySelector(".nav-menu")

  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active")
    navMenu.classList.toggle("active")
  })

  // Close mobile menu when clicking on a nav link
  document.querySelectorAll(".nav-menu a").forEach((link) => {
    link.addEventListener("click", () => {
      hamburger.classList.remove("active")
      navMenu.classList.remove("active")
    })
  })

  // Sticky Header
  const header = document.getElementById("header")
  window.addEventListener("scroll", () => {
    if (window.scrollY > 100) {
      header.style.padding = "0.5rem 0"
      header.style.backgroundColor = "rgba(26, 26, 26, 0.95)"
    } else {
      header.style.padding = "1rem 0"
      header.style.backgroundColor = "rgba(26, 26, 26, 0.9)"
    }
  })

  // Testimonial Slider
  const dots = document.querySelectorAll(".dot")
  const testimonials = document.querySelector(".testimonials-slider")

  dots.forEach((dot, index) => {
    dot.addEventListener("click", () => {
      // Update active dot
      document.querySelector(".dot.active").classList.remove("active")
      dot.classList.add("active")

      // Scroll to the corresponding testimonial
      testimonials.scrollTo({
        left: index * testimonials.offsetWidth,
        behavior: "smooth",
      })
    })
  })

  // Form Validation
  const orderForm = document.getElementById("order-form")
  if (orderForm) {
    orderForm.addEventListener("submit", function (e) {
      e.preventDefault()

      // Simple validation
      const name = document.getElementById("name").value
      const phone = document.getElementById("phone").value
      const address = document.getElementById("address").value

      if (!name || !phone || !address) {
        alert("Please fill in all required fields")
        return
      }

      // Simulate form submission
      const submitButton = this.querySelector(".submit-button")
      submitButton.textContent = "Ordering..."
      submitButton.disabled = true

      setTimeout(() => {
        alert("Thank you for your order! We will deliver your pizza within 30 minutes.")
        orderForm.reset()
        submitButton.textContent = "Place Order"
        submitButton.disabled = false
      }, 1500)
    })
  }

  // Animation on scroll
  const animateOnScroll = () => {
    const elements = document.querySelectorAll(".menu-item, .feature-card, .testimonial, .about-image")

    elements.forEach((element) => {
      const elementPosition = element.getBoundingClientRect().top
      const screenPosition = window.innerHeight / 1.3

      if (elementPosition < screenPosition) {
        element.style.opacity = "1"
        element.style.transform = "translateY(0)"
      }
    })
  }

  // Set initial state for animations
  document.querySelectorAll(".menu-item, .feature-card, .testimonial, .about-image").forEach((element) => {
    element.style.opacity = "0"
    element.style.transform = "translateY(20px)"
    element.style.transition = "opacity 0.5s ease, transform 0.5s ease"
  })

  // Run animation check on load and scroll
  window.addEventListener("load", animateOnScroll)
  window.addEventListener("scroll", animateOnScroll)

  // Add to cart functionality
  const orderButtons = document.querySelectorAll(".order-button")
  let cartCount = 0

  orderButtons.forEach((button) => {
    button.addEventListener("click", function () {
      cartCount++
      this.textContent = "Added!"

      setTimeout(() => {
        this.textContent = "Add to Cart"
      }, 1500)

      // Here you would typically update a cart UI element
      console.log(`Cart items: ${cartCount}`)
    })
  })
})
