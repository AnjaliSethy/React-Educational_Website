import React from "react";

const BlogCard = (props) => {
  const { imgUrl, title, students } = props.item;
  
  return (
    <div className="single__blog__item">
      <div className="blog__img">
        <img src={imgUrl} alt="" className="w-100" />
      </div>

      <div className="blog__details">
        <h6 className="blog__title mb-4">{title}</h6>

        <div className=" d-flex justify-content-between align-items-center">

          <p className="students d-flex align-items-center gap-1">
            <i class="ri-user-line"></i> {students}K
          </p>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;