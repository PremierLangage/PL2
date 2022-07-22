import { activity, exerciceLoadingData } from "../activity";

export const cexActivity : activity = {
    title: "Test Activity Title",
    desc: "**This is an example of Markdown usage**\n\nFeel free to use the power of markdown to your advantage to create a beautiful presentation that will make your students hungry for learning !\n> Maybe you can list the knowledge required to master the activity\n 1. Courage\n 2. Perseverance\n 3. Internet",
    author: "Platon Chad",
    version: "0.0.1",
    exercices: {
        "first": {
            uri: "first",
            title: "first exercice",
            param: {
                difficulty: 1,
                barem: "2"
            }
        },
        "second": {
            uri: "second",
            title: "second exercice",
            param: {
                barem: "5"
            }
        },
        "third": {
            uri: "third",
            title: "third exercice",
            param: {
                difficulty: 5,
            }
        },
        "fourth": {
            uri: "test",
            title: "fourth exercice",
            param: {
            }
        },
        "fifth": {
            uri: "test",
            title: "final exercice",
        }
    },
    entryExercice: "first",
    template: {
        template: 'default',
        exerciceList: 'default'
    }
}