window.addEventListener('load',initEvents);

function initEvents(){
    const sdButton = document.querySelectorAll('.js-link').forEach((link)=>{
        link.addEventListener('click',activator);
    })
}

function activator() {
    const prev = document.querySelector('a[class~="active"]');
    prev.classList.remove('active');

    this.classList.add('active');
}
function scrollCards(direction) {
    const container = document.querySelector('.first-card-container');
    const scrollAmount = 220; // Amount to scroll per click (adjust as needed)
    container.scrollBy({
        left: direction * scrollAmount,
        behavior: 'smooth'
    });
}

const quotes = [
  "The only way to do great work is to love what you do. – Steve Jobs",
  "In the end, we will remember not the words of our enemies, but the silence of our friends. – Martin Luther King Jr.",
  "The journey of a thousand miles begins with one step. – Lao Tzu",
  "Success is not final, failure is not fatal: It is the courage to continue that counts. – Winston Churchill",
  "Don't watch the clock; do what it does. Keep going. – Sam Levenson",
  "You must be the change you wish to see in the world. – Mahatma Gandhi",
  "It does not matter how slowly you go as long as you do not stop. – Confucius",
  "The only impossible journey is the one you never begin. – Tony Robbins",
  "Believe you can and you're halfway there. – Theodore Roosevelt",
  "Success is not how high you have climbed, but how you make a positive difference to the world. – Roy T. Bennett",
  "Your time is limited, so don't waste it living someone else's life. – Steve Jobs",
  "The future belongs to those who believe in the beauty of their dreams. – Eleanor Roosevelt",
  "The best time to plant a tree was 20 years ago. The second best time is now. – Chinese Proverb",
  "It always seems impossible until it’s done. – Nelson Mandela",
  "Don't let yesterday take up too much of today. – Will Rogers",
  "You miss 100% of the shots you don’t take. – Wayne Gretzky",
  "The harder you work for something, the greater you'll feel when you achieve it. – Anonymous",
  "The only limit to our realization of tomorrow is our doubts of today. – Franklin D. Roosevelt",
  "Everything you can imagine is real. – Pablo Picasso",
  "What lies behind us and what lies before us are tiny matters compared to what lies within us. – Ralph Waldo Emerson",
  "Act as if what you do makes a difference. It does. – William James",
  "Success usually comes to those who are too busy to be looking for it. – Henry David Thoreau",
  "Don't be pushed around by the fears in your mind. Be led by the dreams in your heart. – Roy T. Bennett",
  "The only place where success comes before work is in the dictionary. – Vidal Sassoon",
  "Hardships often prepare ordinary people for an extraordinary destiny. – C.S. Lewis",
  "A journey is best measured in friends, rather than miles. – Tim Cahill",
  "Life is what happens when you're busy making other plans. – John Lennon",
  "The purpose of life is not to be happy. It is to be useful, to be honorable, to be compassionate, to have it make some difference that you have lived and lived well. – Ralph Waldo Emerson",
  "Be not afraid of life. Believe that life is worth living, and your belief will help create the fact. – William James",
  "Good things come to those who wait, but better things come to those who go out and get them. – Anonymous",
  "Success is not in what you have, but who you are. – Bo Bennett",
  "If you want to go fast, go alone. If you want to go far, go together. – African Proverb",
  "The best way to predict the future is to create it. – Abraham Lincoln",
  "In three words I can sum up everything I've learned about life: it goes on. – Robert Frost",
  "I find that the harder I work, the more luck I seem to have. – Thomas Jefferson",
  "Strive not to be a success, but rather to be of value. – Albert Einstein",
  "Be yourself; everyone else is already taken. – Oscar Wilde",
  "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe. – Albert Einstein",
  "You must do the things you think you cannot do. – Eleanor Roosevelt",
  "It is never too late to be what you might have been. – George Eliot",
  "Don't cry because it's over, smile because it happened. – Dr. Seuss",
  "We can't help everyone, but everyone can help someone. – Ronald Reagan",
  "Do not go where the path may lead, go instead where there is no path and leave a trail. – Ralph Waldo Emerson",
  "If you look at what you have in life, you'll always have more. – Oprah Winfrey",
  "The best way to cheer yourself is to try to cheer someone else up. – Mark Twain",
  "It is not length of life, but depth of life. – Ralph Waldo Emerson",
  "It always seems impossible until it’s done. – Nelson Mandela",
  "You only live once, but if you do it right, once is enough. – Mae West",
  "The only way to find true happiness is to risk being completely cut open. – Chuck Palahniuk",
  "It’s not what happens to you, but how you react to it that matters. – Epictetus",
  "The purpose of life is to live it, to taste experience to the utmost, to reach out eagerly and without fear for newer and richer experience. – Eleanor Roosevelt",
  "Everything has beauty, but not everyone sees it. – Confucius",
  "Life isn’t about waiting for the storm to pass, it’s about learning to dance in the rain. – Anonymous",
  "The meaning of life is not something you stumble across. It's something you create. – Anonymous",
  "Life is 10% what happens to us and 90% how we react to it. – Charles R. Swindoll",
  "Do what you can, with what you have, where you are. – Theodore Roosevelt",
  "The greatest glory in living lies not in never falling, but in rising every time we fall. – Nelson Mandela",
  "Tell me who admires and loves you, and I will tell you who you are. – Antoine de Saint-Exupéry",
  "Life isn’t about finding yourself. Life is about creating yourself. – George Bernard Shaw",
  "Be the change that you wish to see in the world. – Mahatma Gandhi",
  "Don't judge each day by the harvest you reap, but by the seeds that you plant. – Robert Louis Stevenson",
  "The only way to make sense out of change is to plunge into it, move with it, and join the dance. – Alan Watts",
  "You are never too old to set another goal or to dream a new dream. – C.S. Lewis",
  "Success is the sum of small efforts, repeated day in and day out. – Robert Collier",
  "Nothing will work unless you do. – Maya Angelou",
  "Success is walking from failure to failure with no loss of enthusiasm. – Winston Churchill",
  "Act as if what you do makes a difference. It does. – William James",
  "To live is the rarest thing in the world. Most people exist, that is all. – Oscar Wilde",
  "It’s not whether you get knocked down, it’s whether you get up. – Vince Lombardi",
  "You don’t have to be great to start, but you have to start to be great. – Zig Ziglar",
  "Life is really simple, but we insist on making it complicated. – Confucius",
  "Do not dwell in the past, do not dream of the future, concentrate the mind on the present moment. – Buddha",
  "Happiness is not something ready-made. It comes from your own actions. – Dalai Lama",
  "You have within you right now, everything you need to deal with whatever the world can throw at you. – Brian Tracy",
  "The greatest wealth is to live content with little. – Plato",
  "Everything you can imagine is real. – Pablo Picasso",
  "The best revenge is massive success. – Frank Sinatra",
  "Life is short, and it is up to you to make it sweet. – Sarah Louise Delany",
  "Don’t go through life, grow through life. – Eric Butterworth",
  "It is not what we have in life, but who we have in our life that matters. – J.M. Laurence",
  "You cannot swim for new horizons until you have courage to lose sight of the shore. – William Faulkner",
  "Opportunities don't happen, you create them. – Chris Grosser",
  "Don’t limit your challenges. Challenge your limits. – Anonymous",
  "The only impossible journey is the one you never begin. – Tony Robbins",
  "Whatever you are, be a good one. – Abraham Lincoln",
  "You don’t have to be perfect to be amazing. – Anonymous",
  "It’s never too late to start. – Anonymous",
  "Don’t wait for opportunity. Create it. – Anonymous",
  "When you have a dream, you’ve got to grab it and never let go. – Carol Burnett",
  "The best way out is always through. – Robert Frost",
  "You don’t have to see the whole staircase, just take the first step. – Martin Luther King Jr.",
  "The harder you work for something, the greater you’ll feel when you achieve it. – Anonymous",
  "Believe in yourself and all that you are. Know that there is something inside you that is greater than any obstacle. – Christian D. Larson",
  "Do what you love, and you’ll never work another day in your life. – Confucius",
  "Life is 10% what happens to us and 90% how we react to it. – Charles R. Swindoll",
  "What we think, we become. – Buddha",
  "The best way to predict your future is to create it. – Abraham Lincoln",
  "Nothing can dim the light which shines from within. – Maya Angelou"
];
