import { Box, Text, VStack, Image } from "@chakra-ui/react";

const LanguagePage = () => {
  const journey = [
    {
      title: "Early Bilingual Roots",
      image: "/images/bilingual-child.jpg",
      description:
        "I was raised in a bilingual environment, speaking both Yoruba and English from a young age. This early exposure to multiple languages shaped my thinking, memory, and communication skills, allowing me to switch between languages seamlessly in daily life.",
      notes: {
        milestones: [
          "First words learned in both Yoruba and English.",
          "Switched naturally between languages depending on context.",
          "Early reading in English and storytelling in Yoruba.",
        ],
      },
    },
    {
      title: "Introduction to French",
      image: "/images/french-learning.jpg",
      description:
        "As I grew older, I became fascinated by the French language. I started learning French in school and through self-study. Initially, pronunciation and grammar were challenging, but my bilingual foundation helped me pick up vocabulary and sentence structures faster than I expected.",
      notes: {
        milestones: [
          "Started French lessons at age 12.",
          "Practiced speaking with classmates and online resources.",
          "Learned to conjugate common verbs and form simple sentences.",
        ],
      },
    },
    {
      title: "Current Progress",
      image: "/images/french-progress.jpg",
      description:
        "Now, I am actively working to improve all four core skills in French: listening, speaking, reading, and writing. I dedicate regular time daily to practice, focusing on grammar, vocabulary, and comprehension. My goal is to reach a B2 level and beyond, preparing for exams and real-world use.",
      notes: {
        milestones: [
          "Daily listening practice using podcasts and news.",
          "Speaking exercises with language partners and self-recordings.",
          "Reading progressively harder texts to build vocabulary.",
          "Writing summaries, essays, and journal entries in French.",
        ],
        reflection:
          "Learning French has deepened my appreciation for languages in general. It has made me more disciplined, patient, and culturally aware.",
      },
    },
    {
      title: "Future Goals",
      image: "/images/french-goals.jpg",
      description:
        "Looking ahead, I aim to use French professionally and socially, bridging cultural gaps and enhancing communication. I also plan to continue expanding my multilingual abilities, leveraging my bilingual upbringing and ongoing French learning to explore other languages more easily.",
      notes: {
        milestones: [
          "Achieve B2+ fluency in French.",
          "Engage in conversations with native speakers.",
          "Participate in French-language cultural events.",
          "Possibly learn additional languages leveraging existing skills.",
        ],
      },
    },
  ];

  return (
    <VStack spacing={16} py={10} px={4} align="stretch">
      {/* Page Header */}
      <Box textAlign="center" maxW="600px" mx="auto">
        <Text fontSize="3xl" fontWeight="bold" color="#ffffff">
          My Language Journey 🌍
        </Text>
        <Text fontSize="md" mt={2} color="#aaaaaa">
          From growing up bilingual to learning French, here’s a look at my progress, experiences, and goals.
        </Text>
      </Box>

      {/* Journey Sections */}
      {journey.map((step, i) => (
        <VStack key={i} id={step.title} spacing={6} align="stretch">
          {/* Image */}
          <Image
            src={step.image}
            alt={step.title}
            borderRadius="md"
            maxH="400px"
            objectFit="cover"
            boxShadow="lg"
            mx="auto"
          />

          {/* Title */}
          <Text fontSize="2xl" fontWeight="bold" color="#ffffff" textAlign="center">
            {step.title}
          </Text>

          {/* Description */}
          <Text fontSize="md" color="#cccccc" maxW="800px" mx="auto" textAlign="center">
            {step.description}
          </Text>

          {/* Notes / Milestones */}
          {step.notes && (
            <VStack spacing={4} align="stretch" maxW="800px" mx="auto">
              {step.notes.milestones && (
                <Box>
                  <Text fontWeight="bold" color="#ffffff" mb={2}>
                    Key Milestones:
                  </Text>
                  <VStack spacing={1} align="stretch" ml={4}>
                    {step.notes.milestones.map((item, idx) => (
                      <Text key={idx} color="#aaaaaa">
                        • {item}
                      </Text>
                    ))}
                  </VStack>
                </Box>
              )}

              {step.notes.reflection && (
                <Box>
                  <Text fontWeight="bold" color="#ffffff" mb={1}>
                    Reflection:
                  </Text>
                  <Text color="#aaaaaa">{step.notes.reflection}</Text>
                </Box>
              )}
            </VStack>
          )}
        </VStack>
      ))}
    </VStack>
  );
};

export default LanguagePage;
