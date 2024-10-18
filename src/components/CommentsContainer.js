import React from "react";

const commentsData = [
    {
      name: "John Doe",
      text: "This video was really helpful, thanks for sharing!",
      replies: [
        {
          name: "Jane Smith",
          text: "I agree! Super informative.",
          replies: [],
        },
        {
          name: "Mark Brown",
          text: "Same here, learned a lot!",
          replies: [
            {
              name: "Lisa Adams",
              text: "Me too! I'm following this channel now.",
              replies: [],
            },
          ],
        },
      ],
    },
    {
      name: "Michael Lee",
      text: "Can someone explain the part about API calls?",
      replies: [
        {
          name: "Chris Taylor",
          text: "Check around the 10:20 mark, they explain it well.",
          replies: [
            {
              name: "Michael Lee",
              text: "Got it, thanks!",
              replies: [],
            },
          ],
        },
      ],
    },
    {
      name: "Sarah Wilson",
      text: "Does anyone know if this technique works for React Native?",
      replies: [
        {
          name: "James King",
          text: "Yes, it works for both React and React Native!",
          replies: [],
        },
      ],
    },
    {
      name: "Emily Davis",
      text: "Awesome tutorial, but I think the example could be more detailed.",
      replies: [
        {
          name: "John Doe",
          text: "Totally agree, but overall it's still good.",
          replies: [
            {
              name: "Emily Davis",
              text: "Yeah, definitely learned a lot anyway!",
              replies: [],
            },
          ],
        },
      ],
    },
    {
      name: "David Anderson",
      text: "I'm having trouble implementing this. Any suggestions?",
      replies: [
        {
          name: "Sarah Wilson",
          text: "Maybe try debugging step by step with breakpoints.",
          replies: [],
        },
      ],
    },
    {
      name: "Laura Thompson",
      text: "The audio was a bit low in some parts.",
      replies: [
        {
          name: "Chris Taylor",
          text: "Yeah, I had to turn up the volume too.",
          replies: [],
        },
      ],
    },
    {
      name: "Andrew Martin",
      text: "Great content! Keep up the good work!",
      replies: [],
    },
    {
      name: "Sanjal",
      text: "Nice explanation, very clear and to the point.",
      replies: [
        {
          name: "Mark Brown",
          text: "I think so too, simple and effective!",
          replies: [],
        },
      ],
    },
    {
      name: "Henry Evans",
      text: "I'm still confused about state management. Can anyone help?",
      replies: [
        {
          name: "Jane Smith",
          text: "There are some good docs online for that. Try React's official site.",
          replies: [],
        },
      ],
    },
    {
      name: "Alice Walker",
      text: "Does anyone know when the next video is coming?",
      replies: [
        {
          name: "John Doe",
          text: "I think the creator mentioned it will be next week.",
          replies: [],
        },
      ],
    },
  ];
  
const Comment = ({ data }) => {
  const { name, text, replies } = data;
  return (
    <div className="flex my-3 bg-gray-50 rounded-lg p-2 shadow-sm">
      <img
        className="h-8"
        alt="user-icon"
        src="https://banner2.cleanpng.com/20180622/tqt/aazen4lhc.webp"
      />
      <div className="px-3">
        <p className="font-bold">{name}</p>
        <p>{text}</p>
      </div>
    </div>
  );
};

const CommentsList = ({ comments }) => {
  return comments.map((comment, index) => (
    <div key={index}>
      <Comment data={comment} />
      <div className="pl-5 border border-l-gray-300 ml-5">
        <CommentsList comments={comment.replies} />
      </div>
    </div>
  ));
};

const CommentsContainer = () => {
  return (
    <div className="p-5 m-5 w-[950px]">
      <h1 className="text-2xl font-bold">Comments:</h1>
      <CommentsList comments={commentsData} />
    </div>
  );
};

export default CommentsContainer;
