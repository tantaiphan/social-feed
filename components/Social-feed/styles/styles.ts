export const css = `
.btn-facebook {
  background: #4267b2;
  color: #fff;
  border-radius: 5px;
  width: 100%;
}
.btn-disabled {
  cursor: default;
  opacity: 0.5;
}

.custom-dropdown {
  position: relative;
  display: inline-block;
  background-color: rgb(243, 243, 242);
  border-radius: 5px;
  width: 100%;
}

.selected-option {
  padding: 8px 16px;
  border-radius: 4px;
  cursor: pointer;
}

.arrow {
  position: absolute;
  top: 50%;
  right: 10px;
  transform: translateY(-50%);
}

.arrow.up {
  transform: translateY(-50%) rotate(180deg);
}

.options {
  list-style-type: none;
  margin: 0;
  padding: 0;
  position: absolute;
  background-color: rgb(243, 243, 242);
  border-radius: 0 0 4px 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  z-index: 1;
  width: 100%;
}

.options li {
  padding: 8px 16px;
  cursor: pointer;
}

.options li:hover {
  background-color: #f9f9f9;
}
`;
