import React from "react";
import { Flex, Link, Heading, Image, Text, Button } from "@chakra-ui/react";

const projects = [
  {
    titre: " Paint Project",
    image: "/img/Paint.png",
    description:
      "The project consists in the creation of a Paint in javascript using canvas properties.",
    alt: "Paint Project",
    link: "https://sifedine-hajji.github.io/Paint-Project/.",
  },
  {
    titre: " Maze Game",
    image: "/img/mazeGame.png",
    description:
      "The project consists in the creation of a Maze Game in javascript and using Canvas method.",
    alt: "Paint Project",
    link: "https://sifedine-hajji.github.io/Maze-Game-AmongUS-/.",
  },
  {
    titre: " Snake Game",
    image: "/img/snakeGame.png",
    description:
      "This is a project made during a workshop of an other training group so we learned how to make a snake using Javascript and canvas.",
    alt: "Snake Game Project",
    link: "https://sifedine-hajji.github.io/Snake-Game/",
  },
  {
    titre: " Main Eventer",
    image: "/img/mainEventer.png",
    description:
      "This project was made in group and it consist of making a copy of a main event website.",
    alt: "Main Eventer",
    link: "https://sifedine-hajji.github.io/Main-Eventer/",
  },
  {
    titre: " My games collection",
    image: "/img/Collection.png",
    description:
      "This project wonsist of making a collection of something using Javascript and creating a objectct list.",
    alt: "Games Collectionr",
    link: "https://sifedine-hajji.github.io/My-Games-Collection/",
  },
  {
    titre: " Scientific calculator",
    image: "/img/calculatrice.png",
    description:
      "This is a 'scientific' calculator made with Javascript using mathematic function to make calculations.",
    alt: "Scientific Calculator",
    link: "https://sifedine-hajji.github.io/Scientific-calculator/.",
  },
  {
    titre: " Date object",
    image: "/img/dateObject.png",
    description:
      "This project was given to introduce us to Date object in javascript so we can display the time and the date. ",
    alt: "Date object calendar",
    link: "https://sifedine-hajji.github.io/Date-Object/.",
  },
  {
    titre: " Markdown Editor",
    image: "/img/markdownEditor.png",
    description:
      "This is a markdown editor project. It consists of creating a display where you can write using markdown and preview it in another display next to it. ",
    alt: "Markdown Editor",
    link: "https://sifedine-hajji.github.io/Markdown-Editor/",
  },
  {
    titre: " Pomodoro Timer",
    image: "/img/pomodoroTimer.png",
    description:
      "This project consists of making a pomodoro Timer(workspace where every round you study or work during 25min and get 5min rest ). ",
    alt: "Pomodoro Timer",
    link: "https://sifedine-hajji.github.io/Pomodoro-Timer/.",
  },
  {
    titre: " Advanced landing Page",
    image: "/img/landingPage.png",
    description:
      "This project is based on a browser landing so i maked a custom landing page with newsletter, date display and custom links. ",
    alt: "Advanced web landing page",
    link: "https://sifedine-hajji.github.io/Landing-Page/",
  },
  {
    titre: " Quizz",
    image: "/img/quizzApi.png",
    description:
      "This project is made using a 'Quizz API' and display random questions every time we refresh the website. ",
    alt: "Quizz ",
    link: "https://sifedine-hajji.github.io/The-Sport-Quizz/.",
  },
  {
    titre: " Sushis Restaurant ",
    image: "/img/SushisResto.png",
    description:
      "This is a Sushis restaurant website where you can preview the menu and order something(to learn use javascript functionalities).",
    alt: "Sushis restaurant",
    link: "https://madelinehenry.github.io/18-Restaurant/index.html",
  },
];
export default function Projects() {
  return (
    <>
      <Heading textAlign="center" backgroundColor="black" color="white">
        {" "}
        Some Games & others
      </Heading>
      <Flex
        backgroundColor="rgba(0, 0, 0, 0.863)"
        color="white"
        width="100%"
        flexWrap="wrap"
        justifyContent="center"
      >
        {projects.map((project) => (
          <figure class="imghvr-push-up">
            <Image
              w="528.61px"
              h="300px"
              src={project.image}
              alt={project.alt}
            />
            <figcaption>
              <Heading
                as="h2"
                size="xl"
                textAlign="center"
                class="ih-fade-down ih-delay-sm "
              >
                {project.titre}
              </Heading>
              <Text textAlign="center" mt="3" class="ih-zoom-in ih-delay-md">
                <i>{project.description}</i>
              </Text>
              <Button
                colorScheme="blue"
                width="150px"
                textAlign="center"
                mt="80px"
              >
                <Link
                  padding="10px"
                  href={project.link}
                  _hover={"textDecoration:none"}
                >
                  View Project
                </Link>
              </Button>
            </figcaption>
          </figure>
        ))}
      </Flex>
    </>
  );
}
