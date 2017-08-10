var quizQuestions = [
    {
        question: "My agency is a true partner that should be given access to as many key people, and as much company information as possible.",
        answers: [
            // Agree (+1)/ Disagree (-1)
            {
                type: "ConfidenceAdd1",
                content: "Agree"
            },
            {
                type: "ConfidenceSub1",
                content: "Disagree"
            }
        ]
    },
    {
        question: "I want to have research that confirms pretty much every decision that goes into an ad campaign.",
        answers: [
            // Agree (-1)/Disagree(+1)
            {
                type: "ConfidenceSub1",
                content: "Agree"
            },
            {
                type: "ConfidenceAdd1",
                content: "Disagree"
            }
        ]
    },
    {
        question: "I just feel more confident going with a big, global advertising agency brand.",
        answers: [
            // Agree (-1)/Disagree(+1)
            {
                type: "ConfidenceSub1",
                content: "Agree"
            },
            {
                type: "ConfidenceAdd1",
                content: "Disagree"
            }
        ]
    },
    {
        question: "An agency should stick to the brief and only do what we tell them to do. ",
        answers: [
            // Agree (-1)/Disagree(+1)
            {
                type: "ConfidenceSub1",
                content: "Agree"
            },
            {
                type: "ConfidenceAdd1",
                content: "Disagree"
            }
        ]
    },
    {
        question: "I don’t mind breaking a couple rules as long as my advertising provokes a response.",
        answers: [
            // Agree (+1) / Disagree (-1)
            {
                type: "ConfidenceAdd1",
                content: "Agree"
            },
            {
                type: "ConfidenceSub1",
                content: "Disagree"
            }
        ]
    }, {
        question: "I like to evaluate an ad with my heart and my head.",
        answers: [
            // Agree (+2) / Disagree (-2)
            {
                type: "ConfidenceAdd2",
                content: "Agree"
            },
            {
                type: "ConfidenceSub2",
                content: "Disagree"
            }
        ]
    },
    {
        question: "When my agency does a great job on a big project, I want to go out and celebrate with them!",
        answers: [
            // Agree (+1) / Disagree (0))
            {
                type: "ConfidenceAdd1",
                content: "Agree"
            },
            {
                type: "ConfidenceAdd0",
                content: "Disagree"
            }
        ]
    },
    {
        question: "Our product or service doesn’t need much explanation.",
        answers: [
            // Agree (0)/ Disagree (1) needs
            {
                type: "NeedAdd0",
                content: "Agree"
            },
            {
                type: "NeedAdd1",
                content: "Disagree"
            }
        ]
    },
    {
        question: "Our product has a fairly long purchase cycle.",
        answers: [
            // Agree (1) / Disagree (0) needs
            {
                type: "NeedAdd1",
                content: "Agree"
            },
            {
                type: "NeedAdd0",
                content: "Disagree"
            }
        ]
    },
    {
        question: "Our product or service doesn’t need much explanation.",
        answers: [
            // Agree (0)/ Disagree (1) needs
            {
                type: "NeedAdd0",
                content: "Agree"
            },
            {
                type: "NeedAdd1",
                content: "Disagree"
            }
        ]
    },
    {
        question: "We are mostly – or entirely – a business-to-business marketer.",
        answers: [
            // Agree (1) / Disagree (0) needs
            {
                type: "NeedAdd1",
                content: "Agree"
            },
            {
                type: "NeedAdd0",
                content: "Disagree"
            }
        ]
    },
    {
        question: "Our product is not bought on impulse – it’s a considered purchase.",
        answers: [
            // Agree (1) / Disagree (0) needs
            {
                type: "NeedAdd1",
                content: "Agree"
            },
            {
                type: "NeedAdd0",
                content: "Disagree"
            }
        ]
    }
];

export default quizQuestions;
