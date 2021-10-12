import React from "react";
import Button from "react-bootstrap/Button";
import "./addRepositoryForm.css";

const AddRepositoryForm = () => {
  return (
    <form action="#" class="form">
      <div class="form__group">
        <input
          type="text"
          class="form__input"
          placeholder="Owner/Organisation"
          required
          id="owner"
        />
        <label for="owner" class="form__label">
          Owner/Organisation
        </label>
      </div>
      <div class="form__group">
        <input
          type="email"
          class="form__input"
          placeholder="Repository Name"
          required
          id="name"
        />
        <label for="name" class="form__label">
          Repository Name
        </label>
      </div>
      <div class="form__group">
        <Button type="submit" class="btn">
          Search
        </Button>
      </div>
    </form>
  );
};

export default AddRepositoryForm;
