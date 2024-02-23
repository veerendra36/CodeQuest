import LocalSearchBar from "@/components/shared/search/LocalSearchBar";
import { HomePageFilters } from "@/constants/filters";
import Filter from "@/components/shared/Filter";
import Link from "next/link";
import HomeFilters from "@/components/home/HomeFilters";
import NoResults from "@/components/shared/NoResults";
import QuestionCard from "@/components/cards/QuestionCard";

const questions = [
  {
    _id: "1",
    title: "Example Title 2 Example Author 2Example Author 2Example Author 2",
    tags: [
      { _id: "3", name: "example-tag-3" },
      { _id: "4", name: "example-tag-4" },
    ],
    author: {
      _id: "example-id-2",
      name: "Example Author 2",
      picture: "/assets/images/default-logo.svg",
    },
    upVotes: 0,
    views: 12342243,
    answers: [
      { answer: "Example Answer 3", isCorrect: true },
      { answer: "Example Answer 4", isCorrect: false },
    ],
    createdAt: new Date("2022-02-01T00:00:00.000Z"),
  },
  {
    key: "example-key-3 Example Author 2 ",
    _id: "1",
    title: "Example Title 3",
    tags: [
      { _id: "5", name: "example-tag-5" },
      { _id: "6", name: "example-tag-6" },
      { _id: "6", name: "example-tag-6" },
      { _id: "6", name: "example-tag-6" },
      { _id: "6", name: "example-tag-6" },
      { _id: "6", name: "example-tag-6" },
      { _id: "6", name: "example-tag-6" },
      { _id: "6", name: "example-tag-6" },
      { _id: "6", name: "example-tag-6" },
    ],
    author: {
      _id: "example-id-3",
      name: "Example Author 3",
      picture: "/assets/images/default-logo.svg",
    },
    upVotes: 0,
    views: 100,
    answers: [
      { answer: "Example Answer 5", isCorrect: true },
      { answer: "Example Answer 6", isCorrect: false },
    ],
    createdAt: new Date("2022-03-01T00:00:00.000Z"),
  },
];

export default function Home() {
  return (
    <>
      <div className="flex w-full flex-col-reverse justify-between gap-4 sm:flex-row sm:items-center">
        <h1 className="h1-bold text-dark100_light900">All Question</h1>
        <Link href="/ask-question" className="flex justify-end max-sm:w-full">
          <button className="primary-gradient min-h-[46px] rounded-md px-4 py-3 !text-light-900">
            Ask a Question
          </button>
        </Link>
      </div>
      <div className="mt-11 flex justify-between gap-5 max-sm:flex-col sm:items-center">
        <LocalSearchBar
          route="/"
          iconPosition="right"
          imgSrc="/assets/icon/search.svg"
          placeHolder="Search for questions"
          otherClasses="flex-1"
        />
        <Filter
          filters={HomePageFilters}
          otherClasses="min-h-[56px] sm:min-w-[170px]"
          containerClasses="hidden max-md:flex"
        />
      </div>

      <HomeFilters />

      <div className="mt-10 flex w-full flex-col gap-6">
        {questions.length > 0 ? (
          questions.map((question) => (
            <QuestionCard
              key={question._id}
              _id={question._id}
              title={question.title}
              tags={question.tags}
              upVotes={question.upVotes}
              author={question.author}
              answers={question.answers}
              views={question.views}
              createdAt={question.createdAt}
            />
          ))
        ) : (
          <NoResults
            title="There are no question to show"
            description="Be the first to break the silence! 🚀 Ask a Question and kickstart the discussion. our query could be the next big thing others learn from. Get involved! 💡"
            link="/"
            linkTitle="Ask a Question"
          />
        )}
      </div>
    </>
  );
}
