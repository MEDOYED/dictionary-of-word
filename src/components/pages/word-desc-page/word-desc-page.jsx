import AudioPlayer from "../../ui/audio-player/audio-player";

import "./word-desc-page.css";

const WordDescPage = () => {
  const data = [
    {
      word: "dog",
      // phonetic: "/dɑɡ/",
      phonetics: [
        // {
        // text: "/dɑɡ/",
        // audio: "https://api.dictionaryapi.dev/media/pronunciations/en/dog-uk.mp3",
        // },
        {
          text: "/dɒɡ/",
          audio: "https://api.dictionaryapi.dev/media/pronunciations/en/dog-uk.mp3",
          // sourceUrl: "https://commons.wikimedia.org/w/index.php?curid=9014185",
          // license: {
          // name: "BY 3.0 US",
          // url: "https://creativecommons.org/licenses/by/3.0/us",
          // },
        },
        {
          text: "/dɔɡ/",
          audio: "https://api.dictionaryapi.dev/media/pronunciations/en/dog-us.mp3",
          // sourceUrl: "https://commons.wikimedia.org/w/index.php?curid=631204",
          // license: {
          // name: "BY-SA 3.0",
          // url: "https://creativecommons.org/licenses/by-sa/3.0",
          // },
        },
        // {
        //   text: "/dɑɡ/",
        //   audio: "",
        // },
      ],
      meanings: [
        {
          partOfSpeech: "noun",
          definitions: [
            {
              definition:
                "A mammal, Canis familiaris or Canis lupus familiaris, that has been domesticated for thousands of years, of highly variable appearance due to human breeding.",
              synonyms: [],
              antonyms: [],
              example: "The dog barked all night long.",
            },
            {
              definition:
                "Any member of the Family Canidae, including domestic dogs, wolves, coyotes, jackals, foxes, and their relatives (extant and extinct); canid.",
              synonyms: [],
              antonyms: [],
            },
            {
              definition: "A male dog, wolf or fox, as opposed to a bitch or vixen.",
              synonyms: [],
              antonyms: [],
            },
            {
              definition: "A dull, unattractive girl or woman.",
              synonyms: [],
              antonyms: [],
              example: "She’s a real dog.",
            },
            //   {
            //     definition: "A man (derived from definition 2).",
            //     synonyms: [],
            //     antonyms: [],
            //     example: "He's a silly dog.",
            //   },
            //   {
            //     definition: "A coward.",
            //     synonyms: [],
            //     antonyms: [],
            //     example: "Come back and fight, you dogs!",
            //   },
            //   {
            //     definition: "Someone who is morally reprehensible.",
            //     synonyms: [],
            //     antonyms: [],
            //     example: "You dirty dog.",
            //   },
            //   {
            //     definition: "A sexually aggressive man (cf. horny).",
            //     synonyms: [],
            //     antonyms: [],
            //   },
            //   {
            //     definition:
            //       "Any of various mechanical devices for holding, gripping, or fastening something, particularly with a tooth-like projection.",
            //     synonyms: [],
            //     antonyms: [],
            //   },
            //   {
            //     definition:
            //       "A click or pallet adapted to engage the teeth of a ratchet-wheel, to restrain the back action; a click or pawl. (See also: ratchet, windlass)",
            //     synonyms: [],
            //     antonyms: [],
            //   },
            //   {
            //     definition: "A metal support for logs in a fireplace.",
            //     synonyms: [],
            //     antonyms: [],
            //     example: "The dogs were too hot to touch.",
            //   },
            //   {
            //     definition: "The eighteenth Lenormand card.",
            //     synonyms: [],
            //     antonyms: [],
            //   },
            //   {
            //     definition: "A hot dog.",
            //     synonyms: [],
            //     antonyms: [],
            //   },
            //   {
            //     definition: "Underdog.",
            //     synonyms: [],
            //     antonyms: [],
            //   },
            //   {
            //     definition: "(almost always in the plural) Foot.",
            //     synonyms: [],
            //     antonyms: [],
            //   },
            //   {
            //     definition: '(from "dog and bone") Phone or mobile phone.',
            //     synonyms: [],
            //     antonyms: [],
            //     example: "My dog is dead.",
            //   },
            //   {
            //     definition: "One of the cones used to divide up a racetrack when training horses.",
            //     synonyms: [],
            //     antonyms: [],
            //   },
            //   {
            //     definition: "A flop; a film that performs poorly at the box office.",
            //     synonyms: [],
            //     antonyms: [],
            //   },
          ],
          synonyms: [
            "Canis canis",
            "Canis domesticus",
            "Canis familiaris",
            "canine",
            "domestic dog",
            "hound",
            "sire",
            "stud",
            "bloke",
            "chap",
            "dude",
            "fellow",
            "guy",
            "man",
            "click",
            "detent",
            "pawl",
            "andiron",
            "dogiron",
            "firedog",
            "blackguard",
            "bounder",
            "cad",
            "fool",
            "heel",
            "hound",
            "scoundrel",
          ],
          antonyms: [],
        },
        {
          partOfSpeech: "verb",
          definitions: [
            {
              definition: "To pursue with the intent to catch.",
              synonyms: [],
              antonyms: [],
            },
            {
              definition: "To follow in an annoying or harassing way.",
              synonyms: [],
              antonyms: [],
              example: "The woman cursed him so that trouble would dog his every step.",
            },
            {
              definition: "To fasten a hatch securely.",
              synonyms: [],
              antonyms: [],
              example: "It is very important to dog down these hatches...",
            },
            {
              definition: "To watch, or participate, in sexual activity in a public place.",
              synonyms: [],
              antonyms: [],
              example: "I admit that I like to dog at my local country park.",
            },
            {
              definition:
                "To intentionally restrict one's productivity as employee; to work at the slowest rate that goes unpunished.",
              synonyms: [],
              antonyms: [],
              example:
                "A surprise inspection of the night shift found that some workers were dogging it.",
            },
            {
              definition: "To criticize.",
              synonyms: [],
              antonyms: [],
            },
            {
              definition: "To divide (a watch) with a comrade.",
              synonyms: [],
              antonyms: [],
            },
          ],
          synonyms: [
            "chase",
            "chase after",
            "go after",
            "pursue",
            "tag",
            "tail",
            "track",
            "trail",
            "goldbrick",
            "soldier",
          ],
          antonyms: [],
        },
        {
          partOfSpeech: "noun",
          definitions: [
            {
              definition: "Meat from a dog eaten as food.",
              synonyms: [],
              antonyms: [],
              example:
                "We visited South Korea this time around, where we ate dog meat for the first time.",
            },
            {
              definition: "Meat prepared to be given to a dog as food.",
              synonyms: [],
              antonyms: [],
            },
            {
              definition:
                "An insult intended to assert hyperbolically that another person has value only as a corpse to be fed to a dog.",
              synonyms: [],
              antonyms: [],
              example: "Did you just step on my blue suede shoes? You're dog meat now!",
            },
          ],
          // synonyms: ["dog", "dog food", "fragrant meat"],
          // antonyms: [],
        },
      ],
      // license: {
      //   name: "CC BY-SA 3.0",
      //   url: "https://creativecommons.org/licenses/by-sa/3.0",
      // },
      sourceUrls: [
        "https://en.wiktionary.org/wiki/dog",
        "https://en.wiktionary.org/wiki/dog%20meat",
      ],
    },
  ];

  return (
    <>
      <section className="word-desc">
        <div className="word-desc__wrapper">
          <div className="word-desc__content">
            <h2 className="word-desc__heading">Meaning of {data[0].word} in English</h2>
            <ul className="word-desc__links">
              <li className="word-desc__link">
                <a className="word-desc__btn" href={data[0].sourceUrls[0]} target="__blank">
                  <div className="word-desc__btn"></div>
                </a>
              </li>
              <li className="word-desc__link">
                <a className="word-desc__btn" href={data[0].sourceUrls[1]} target="__blank">
                  <div className="word-desc__btn"></div>
                </a>
              </li>
            </ul>
            <hr className="word-desc__line" />
            <h2 className="word-desc__title">{data[0].word}</h2>
            <div>{data[0].phonetics[0].text}</div>

            <AudioPlayer country={"UK"} link={0} data={data} />
            <AudioPlayer country={"US"} link={1} data={data} />

            <hr className="word-desc__bold-line" />

            <section className="word-desc__dog-noun">
              <h2 className="word-desc__title">{data[0].word}</h2>
              <h2 className="word-desc__part-of-spech">{data[0].meanings[0].partOfSpeech}</h2>
              <div className="word-desc__definition">
                {data[0].meanings[0].definitions[0].definition}
              </div>
              <div className="word-desc__example">{data[0].meanings[0].definitions[0].example}</div>

              <ul className="word-desc__synonyms-list">
                <li className="word-desc__synonyms-item">{data[0].meanings[0].synonyms[0]}</li>
                <li className="word-desc__synonyms-item">{data[0].meanings[0].synonyms[1]}</li>
                <li className="word-desc__synonyms-item">{data[0].meanings[0].synonyms[2]}</li>
                <li className="word-desc__synonyms-item">{data[0].meanings[0].synonyms[3]}</li>
                <li className="word-desc__synonyms-item">{data[0].meanings[0].synonyms[4]}</li>
              </ul>

              <ul className="word-desc__more-definitions-list">
                <li className="word-desc__more-definitions-item">
                  {data[0].meanings[0].definitions[1].definition}
                </li>
                <li className="word-desc__more-definitions-item">
                  {data[0].meanings[0].definitions[2].definition}
                </li>
                <li className="word-desc__more-definitions-item">
                  {data[0].meanings[0].definitions[3].definition}
                </li>
              </ul>
            </section>

            <hr className="word-desc__bold-line" />
            <div>=========================================================</div>

            <section className="word-desc__dog-noun">
              <h2 className="word-desc__title">{data[0].word}</h2>
              <h2 className="word-desc__part-of-spech">{data[0].meanings[1].partOfSpeech}</h2>
              <div className="word-desc__definition">
                {data[0].meanings[1].definitions[0].definition}
              </div>
              <div className="word-desc__example">{data[0].meanings[1].definitions[0].example}</div>

              <ul className="word-desc__synonyms-list">
                <li className="word-desc__synonyms-item">{data[0].meanings[1].synonyms[0]}</li>
                <li className="word-desc__synonyms-item">{data[0].meanings[1].synonyms[1]}</li>
                <li className="word-desc__synonyms-item">{data[0].meanings[1].synonyms[2]}</li>
                <li className="word-desc__synonyms-item">{data[0].meanings[1].synonyms[3]}</li>
                <li className="word-desc__synonyms-item">{data[0].meanings[1].synonyms[4]}</li>
              </ul>

              <ul className="word-desc__more-definitions-list">
                <li className="word-desc__more-definitions-item">
                  {data[0].meanings[1].definitions[1].definition}
                </li>
                <li className="word-desc__more-definitions-item">
                  {data[0].meanings[1].definitions[2].definition}
                </li>
                <li className="word-desc__more-definitions-item">
                  {data[0].meanings[1].definitions[3].definition}
                </li>
              </ul>
            </section>
          </div>
        </div>
      </section>
    </>
  );
};

export default WordDescPage;
