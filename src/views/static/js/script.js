document.addEventListener("DOMContentLoaded", function () {
  /** Dashboard page */
  if (window.location.pathname === "/dashboard") {
    // sidebar
    const sidebar = document.getElementById("logo-sidebar")
    const menuButton = document.querySelector(
      '[data-drawer-toggle="logo-sidebar"]'
    )
    menuButton.addEventListener("click", function (e) {
      const expanded = this.getAttribute("aria-expanded") === "true" || "false"
      this.setAttribute("aria-expanded", !expanded)
      sidebar.classList.toggle("-translate-x-full")
    })

    // menu user
    const menuUser = document.getElementById("user-menu")
    const btnUser = document.querySelector('button[aria-controls="user-menu"]')
    btnUser.addEventListener("click", function (e) {
      if (menuUser.classList.contains("hidden")) {
        menuUser.classList.remove("hidden")
        menuUser.classList.add("block")
      } else {
        menuUser.classList.remove("block")
        menuUser.classList.add("hidden")
      }
    })

    // empty state
    const emptyState = document.getElementById("empty-file")
    const fileTable = document.getElementById("files-table")

    // check if table tbody is empty
    if (fileTable.querySelector("tbody").childElementCount === 0) {
      emptyState.classList.remove("hidden")
      emptyState.classList.add("flex")
      fileTable.classList.add("hidden")
    } else {
      emptyState.classList.add("hidden")
      fileTable.classList.remove("hidden")
    }
  }

  /** Login Page */
  if (window.location.pathname === "/login") {
    // toggle show and hide password
    const password = document.getElementById("password")
    const showPassword = document.getElementById("show-password")
    showPassword.addEventListener("click", function (e) {
      if (password.type === "password") {
        password.type = "text"
        showPassword.firstElementChild.classList.remove("hidden")
        showPassword.lastElementChild.classList.add("hidden")
      } else {
        password.type = "password"
        showPassword.firstElementChild.classList.add("hidden")
        showPassword.lastElementChild.classList.remove("hidden")
      }
    })
  }

  /** Register Page */
  if (window.location.pathname === "/register") {
    // toggle show and hide password
    const password = document.getElementById("password")
    const showPassword = document.getElementById("show-password")
    showPassword.addEventListener("click", function (e) {
      if (password.type === "password") {
        password.type = "text"
        showPassword.firstElementChild.classList.remove("hidden")
        showPassword.lastElementChild.classList.add("hidden")
      } else {
        password.type = "password"
        showPassword.firstElementChild.classList.add("hidden")
        showPassword.lastElementChild.classList.remove("hidden")
      }
    })

    // toggle show and hide confirm password
    const confirmPassword = document.getElementById("confirm-password")
    const showConfirmPassword = document.getElementById("show-confirm-password")
    showConfirmPassword.addEventListener("click", function (e) {
      if (confirmPassword.type === "password") {
        confirmPassword.type = "text"
        showConfirmPassword.firstElementChild.classList.remove("hidden")
        showConfirmPassword.lastElementChild.classList.add("hidden")
      } else {
        confirmPassword.type = "password"
        showConfirmPassword.firstElementChild.classList.add("hidden")
        showConfirmPassword.lastElementChild.classList.remove("hidden")
      }
    })

    // warning password doesn't match
    const warnRegister = document.getElementById("warn-register")
    confirmPassword.addEventListener("keyup", function () {
      if (password.value !== confirmPassword.value) {
        warnRegister.classList.remove("hidden")
        warnRegister.classList.add("flex")

        const alertMessage = warnRegister.lastElementChild
        alertMessage.innerHTML =
          "<span class='font-medium'>Warning!</span> Password doesn't match"
      } else {
        warnRegister.classList.add("hidden")
        warnRegister.classList.remove("flex")
      }
    })
  }
})

if (window.location.pathname === "/dashboard") {
  function checkInput(checkId) {
    return document.getElementById(checkId).checked === true ? "desc" : "asc"
  }
}
