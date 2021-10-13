import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import "./addRepositoryForm.css";

const AddRepositoryForm = ({ addRepo, onHide }) => {
  const [initialState, setState] = useState({
    repoName: "",
    owner: "",
  });

  const handleInputChange = (event) => {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    setState({
      ...initialState,
      [name]: value,
    });
  };

  const fetchRepos = async (event) => {
    event.preventDefault();
    const response = await fetch(
      `https://api.github.com/repos/${initialState.owner}/${initialState.repoName}`
    );
    if (response.ok) {
      const rep = await response.json();
      addRepo(rep);
      onHide(false);
    } else {
      alert("Repository not found!, Check your credentials.");
    }
  };

  return (
    <form action="#" className="form" onSubmit={fetchRepos}>
      <div className="form__group">
        <input
          name="owner"
          type="text"
          className="form__input"
          placeholder="Enter Owner/Organisation"
          required
          id="owner"
          value={initialState.owner}
          onChange={handleInputChange}
        />
        <label for="owner" className="form__label">
          Owner/Organisation
        </label>
      </div>
      <div className="form__group">
        <input
          name="repoName"
          type="text"
          className="form__input"
          placeholder="Enter Repository Name"
          required
          id="name"
          value={initialState.repoName}
          onChange={handleInputChange}
        />
        <label for="name" className="form__label">
          Repository Name
        </label>
      </div>
      <div className="form__group">
        <Button type="submit" className="btn">
          Add
        </Button>
      </div>
    </form>
  );
};

export default AddRepositoryForm;
