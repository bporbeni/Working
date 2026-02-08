// California Website - Form Validation Script
// Email matching validation for contact form

document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('contactForm')

  if (form) {
    form.addEventListener('submit', function (event) {
      event.preventDefault() // Prevent form submission

      // Get form field values
      const firstName = document.getElementById('firstName').value.trim()
      const lastName = document.getElementById('lastName').value.trim()
      const email = document.getElementById('email').value.trim()
      const emailConfirm = document.getElementById('emailConfirm').value.trim()
      const question = document.getElementById('question').value.trim()

      // Validate that all fields are filled
      if (!firstName || !lastName || !email || !emailConfirm || !question) {
        alert('Please fill in all fields before submitting.')
        return
      }

      // Check if email addresses match
      if (email !== emailConfirm) {
        alert('Error: The email addresses do not match. Please check and try again.')

        // Highlight the email fields
        document.getElementById('email').classList.add('error-input')
        document.getElementById('emailConfirm').classList.add('error-input')

        // Focus on the confirmation email field
        document.getElementById('emailConfirm').focus()

        return
      }

      // If validation passes, show success message
      alert(
        'Thank you for contacting us! Your message has been received.\n\nWe will respond to ' +
          email +
          ' within 24-48 hours.'
      )

      // Remove error styling if it exists
      document.getElementById('email').classList.remove('error-input')
      document.getElementById('emailConfirm').classList.remove('error-input')

      // Optional: Reset the form
      form.reset()
    })

    // Remove error styling when user starts typing
    document.getElementById('email').addEventListener('input', function () {
      this.classList.remove('error-input')
    })

    document.getElementById('emailConfirm').addEventListener('input', function () {
      this.classList.remove('error-input')
    })
  }
})
