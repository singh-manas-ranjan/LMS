const orderByBtns = [
  {
    btnName: "Filter",
    options: ["All", "Free Courses", "Paid Courses"],
  },
  {
    btnName: "Sort",
    options: ["Ascending", "Descending", "Rating"],
  },
];

export type orderByBtnType = {
  btnName: string;
  options: string[];
};

export default orderByBtns;
