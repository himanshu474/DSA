/**
 * @param {number[]} score
 * @return {string[]}
 */
const medals = ["Fake Medal", "Gold Medal", "Silver Medal", "Bronze Medal"];
const findRelativeRanks = (score) =>
    score
        .map((s, i) => ({ scored: s, position: i + 1 }))
        .sort((x, y) => y.scored - x.scored)
        .map(({ position }, i) => ({ position, place: i + 1 }))
        .sort((x, y) => x.position - y.position)
        .map(({ place }) => medals[place] || place.toString());
