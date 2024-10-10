import React, { useState, useEffect } from "react";
import "./Resources.css";
import { FaFilePdf, FaVideo, FaLink, FaSearch } from "react-icons/fa";

const resourceData = [
  {
    id: 1,
    title: "Project Plan",
    type: "Document",
    icon: <FaFilePdf />,
    url: "/path-to-document",
    description: "Comprehensive project plan document.",
    tags: ["planning", "documentation"],
    date: "2024-10-01",
  },
  {
    id: 2,
    title: "Introduction Video",
    type: "Video",
    icon: <FaVideo />,
    url: "/path-to-video",
    description: "Overview video about the project.",
    tags: ["video", "overview"],
    date: "2024-10-05",
  },
  {
    id: 3,
    title: "Design Guidelines",
    type: "Document",
    icon: <FaFilePdf />,
    url: "/path-to-design-guidelines",
    description: "UI/UX guidelines for the project.",
    tags: ["design", "UI/UX"],
    date: "2024-09-28",
  },
  {
    id: 4,
    title: "GitHub Repository",
    type: "Link",
    icon: <FaLink />,
    url: "https://github.com/project-repo",
    description: "Access the project’s GitHub repository.",
    tags: ["code", "repository"],
    date: "2024-10-02",
  },
  {
    id: 5,
    title: "Marketing Strategy",
    type: "Document",
    icon: <FaFilePdf />,
    url: "/path-to-marketing-strategy",
    description: "Document outlining the marketing strategy.",
    tags: ["marketing", "strategy"],
    date: "2024-09-25",
  },
  {
    id: 6,
    title: "Training Video",
    type: "Video",
    icon: <FaVideo />,
    url: "/path-to-training-video",
    description: "Recorded training session for the team.",
    tags: ["training", "video"],
    date: "2024-10-03",
  },
  {
    id: 7,
    title: "User Manual",
    type: "Document",
    icon: <FaFilePdf />,
    url: "/path-to-user-manual",
    description: "User manual for the application.",
    tags: ["manual", "documentation"],
    date: "2024-09-29",
  },
  {
    id: 8,
    title: "Feedback Form",
    type: "Link",
    icon: <FaLink />,
    url: "/path-to-feedback-form",
    description: "Link to the project feedback form.",
    tags: ["feedback", "survey"],
    date: "2024-10-04",
  },
  {
    id: 9,
    title: "Sprint Review",
    type: "Document",
    icon: <FaFilePdf />,
    url: "/path-to-sprint-review",
    description: "Document summarizing the sprint review.",
    tags: ["sprint", "review"],
    date: "2024-10-06",
  },
  {
    id: 10,
    title: "Team Meeting Notes",
    type: "Document",
    icon: <FaFilePdf />,
    url: "/path-to-meeting-notes",
    description: "Notes from the last team meeting.",
    tags: ["meeting", "notes"],
    date: "2024-10-07",
  },
  {
    id: 11,
    title: "Code Review Guidelines",
    type: "Document",
    icon: <FaFilePdf />,
    url: "/path-to-code-review-guidelines",
    description: "Guidelines for conducting code reviews.",
    tags: ["code", "review", "guidelines"],
    date: "2024-10-08",
  },
  {
    id: 12,
    title: "Project Timeline",
    type: "Document",
    icon: <FaFilePdf />,
    url: "/path-to-project-timeline",
    description: "Visual representation of the project timeline.",
    tags: ["timeline", "planning"],
    date: "2024-10-09",
  },
];

const Resources = () => {
  const [resources, setResources] = useState(resourceData);
  const [selectedType, setSelectedType] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [activeResource, setActiveResource] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const resourcesPerPage = 3;

  // Filter and search logic
  const filteredResources = resources.filter((resource) => {
    const matchesType =
      selectedType === "All" || resource.type === selectedType;
    const matchesSearch = resource.title
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    return matchesType && matchesSearch;
  });

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const paginatedResources = filteredResources.slice(
    (currentPage - 1) * resourcesPerPage,
    currentPage * resourcesPerPage
  );

  // Handle modal opening
  const openResourceModal = (resource) => {
    setActiveResource(resource);
  };

  // Handle modal closing
  const closeResourceModal = () => {
    setActiveResource(null);
  };

  return (
    <div className="re-resources-container">
      <h1 className="re-resources-title">Project Resources</h1>

      {/* Filter and Search Section */}
      <div className="re-resources-filter">
        <div className="re-search-container">
          <FaSearch className="re-search-icon" />
          <input
            type="text"
            placeholder="Search resources..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="re-search-bar"
          />
        </div>

        <div className="re-filter-buttons">
          <button
            className={`re-filter-button ${
              selectedType === "All" ? "re-active" : ""
            }`}
            onClick={() => setSelectedType("All")}
          >
            All
          </button>
          <button
            className={`re-filter-button ${
              selectedType === "Document" ? "re-active" : ""
            }`}
            onClick={() => setSelectedType("Document")}
          >
            Documents
          </button>
          <button
            className={`re-filter-button ${
              selectedType === "Video" ? "re-active" : ""
            }`}
            onClick={() => setSelectedType("Video")}
          >
            Videos
          </button>
          <button
            className={`re-filter-button ${
              selectedType === "Link" ? "re-active" : ""
            }`}
            onClick={() => setSelectedType("Link")}
          >
            Links
          </button>
        </div>
      </div>

      {/* Resource Cards Section */}
      <div className="re-resources-grid">
        {paginatedResources.map((resource) => (
          <div
            key={resource.id}
            className="re-resource-card"
            onClick={() => openResourceModal(resource)}
          >
            <div className="re-resource-icon">{resource.icon}</div>
            <h3 className="re-resource-title">{resource.title}</h3>
            <p className="re-resource-description">{resource.description}</p>
            <p className="re-resource-date">
              {new Date(resource.date).toLocaleDateString()}
            </p>
            <div className="re-tags">
              {resource.tags.map((tag, index) => (
                <span key={index} className="re-tag">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="re-pagination">
        {Array.from({
          length: Math.ceil(filteredResources.length / resourcesPerPage),
        }).map((_, index) => (
          <button
            key={index}
            className={`re-page-button ${
              currentPage === index + 1 ? "re-active" : ""
            }`}
            onClick={() => handlePageChange(index + 1)}
          >
            {index + 1}
          </button>
        ))}
      </div>

      {/* Resource Modal */}
      {activeResource && (
        <div className="re-resource-modal">
          <div className="re-modal-content">
            <button className="re-close-modal" onClick={closeResourceModal}>
              X
            </button>
            <div className="re-modal-icon">{activeResource.icon}</div>
            <h3 className="re-modal-title">{activeResource.title}</h3>
            <p className="re-modal-description">{activeResource.description}</p>
            <a
              href={activeResource.url}
              target="_blank"
              rel="noopener noreferrer"
              className="re-modal-link"
            >
              {activeResource.type === "Document" ? "Download" : "Access"}{" "}
              {activeResource.type}
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default Resources;
