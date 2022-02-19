const { getDefaultNormalizer } = require('@testing-library/react')

const ArticleRecentDB = [
    {
        id: 1, 
        title: 'Benefits of a simple lifestyle', 
        body: 'A simpler, less cluttered, and less hectic lifestyle has uncountable benefits, mostly for our health. Living simply automatically lowers the levels of stress, which directly affects blood pressure,  allowing for better sleep and decreasing the chance of a heart attack or anxiety.',
        image: require( '../Images/benefits-of-simple-lifestyle.jpg'),
        alt: 'Healthy lifestyle',
        info: `${new Date(2022, 0, 1).toDateString()}  | 5 comments`
    },
    {
        id: 2, 
        title: 'Keeping cooking simple', 
        body: 'Simple cooking can have many meanings depending on the context, but here we talk about simple food made with natural ingredients, perhaps from our own garden, simple cooking techniques that have been around for centuries and used by our ancestors, the rustic flavors and the typical and humble pantry house ingredients.',
        image: require( '../Images/simple-cooking.jpg'),
        alt: 'Simple cooking',
        info: `${new Date(2022, 0, 1).toDateString()}  | 8 comments`
    },
    {
        id: 3, 
        title: 'Gratitude and appreciation', 
        body: 'Practicing gratitude helps us appreciate the small pleasures life gifts us with. It also helps us become more aware of the things we have, making us far less likely to envy others. Being grateful teaches us to see the best in any situation and learn the lessons that help us grow and become better versions of ourselves.',
        image: require( '../Images/gratitude.jpg'),
        alt: 'Gratitude and appreciation',
        info: `${new Date(2022, 0, 1).toDateString()}  | 2 comments`
    }
]

export default ArticleRecentDB