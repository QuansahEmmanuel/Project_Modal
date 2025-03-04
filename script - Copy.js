document.addEventListener("DOMContentLoaded", function () {
  const checkbox = document.getElementById("checkbox_modal");
  const modalElement = document.getElementById("exampleModal");
  const modal = new bootstrap.Modal(modalElement);

  checkbox.addEventListener("change", function () {
    if (this.checked) {
      modal.show();
    } else {
      modal.hide();
    }
  });

  // Uncheck the checkbox when the modal is closed
  modalElement.addEventListener("hidden.bs.modal", function () {
    checkbox.checked = false;
  });

  // Initialize Select2 only when modal is shown
  $(modalElement).on("shown.bs.modal", function () {
    $("#ratings").select2({
      dropdownParent: $("#exampleModal"), // Ensure Select2 works inside Bootstrap modal
      placeholder: "Select Rating",
      allowClear: true,
    });
  });
});
