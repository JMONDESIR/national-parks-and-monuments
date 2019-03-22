const buildParkHtml = parkObject => {
  // <article id="wrapper">
  //  <h3>Park Name</h3>
  //  <p>State the park in located in</p>
  // </article>

  const parkArticle = buildElement("article");
  parkArticle.id = "wrapper"
  parkArticle.appendChild(buildElement("h3", undefined, parkObject.name));
  parkArticle.appendChild(buildElement("p", undefined, parkObject.state));

  let deleteParkButton = buildElement("button", `delete-park--${parkObject.id}`, "Delete Park")
  deleteParkButton.classList = "deleteButton"
  parkArticle.appendChild(deleteParkButton);
  deleteParkButton.addEventListener("click", handleDelete)
  return parkArticle;
};
