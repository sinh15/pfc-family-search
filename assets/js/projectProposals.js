/* start: name popularity comparison */
function namesPopularity() {
    var description = [
        "This functionality aims to compare how popular names were around a certain period of time and location.",
        "As an example, the Names functionality could study how many instances of a given group of names, were found around a ten year interval, for a specific location. Then, the user could compare name by name, the popularity of each one.",
        "Another investigation that this feature could address is to study if a name saw its popularity increased, after personal achivements of well known people.",
        "Finally, this feature could be further expanded with the search popularity comparison done on multiple countries, localizing the names for each one of the searched countries."
    ];
    var complexity = "45";

    // Return parameters
    return [description, complexity];
}

function catalanPortal() {
    var description = [
        "The main idea of this functionality is to create a web portal in Catalan, which enabled the users to browse the FamilySearch data in that language.",
        "The project does not only consist on the creation of a Catalan website, but also in localizing the language of the returned attributes and genealogical data, to Catalan. For example, instead of using the word ‘deceased’, the website could use the term ‘difunt’.",
        "The project could also be extended by limiting the search results to the Catalan region, with the possibility of overriding that restriction.",
        "Of course this project can be adapted to any language and it would be equally interesting."
    ];
    var complexity = "35";

    // Return parameters
    return [description, complexity];
}

function improvedSurnameGeo() {
    var description = [
        "This functionality aims to improve the surname geolocation feature implemented on this website.",
        "The implemented functionality only allows the user to check the surname presence and expansion, over a group of countries, but it could be really interesting to offer the same functionality at State level, continent level, etcetera, etcetera.",
        "This project suggests a functionality that would enable the user, to roll-up or roll-down, the location level being searched and would display the surname presence and evolution picture, at all those different levels."
    ];
    var complexity = "65";

    // Return parameters
    return [description, complexity];
}

function genealogyHeraldy() {
    var description = [
        "This project proposal aims to reunite two sciences that walked hand by hand on their origins.",
        "The main idea behind the project would be to acquire and collect a huge number of coat of arms and family name pictures, and print them along the detailed persons' data from FamilySearch.",
        "This project could simply store all the downloaded pictures on a database or even offer an API, to get and serve those coat of arms and family name pictures, on a more organized way."
    ];
    var complexity = "50";

    // Return parameters
    return [description, complexity];
}

function indexingProjects() {
    var description = [
        "This project could actually be divided into two different ones and they do not actually focus on the interaction with the FamilySearch API.",
        "Since these project ideas are mainly designed for computer engineering stuents, I thought it was a good idea to offer some projects that were focused on the indexing servies offered by the organization.",
        "The first idea would be to implement a visual recognition feature that parsed some structured genealogical registers (computer / typewriter), and tried to extract its genealogical data. For that, the interested person would need to find an organization with structured registers.",
        "The second idea goes around the indexing of the old hand written genealogical registers. The project aims to create a visual recognition application that would advise the users about the written words to be transcripted. It could be potentially used as a helper along the current indexing platform developed by FamilySearch."
    ];
    var complexity = "95";

    // Return parameters
    return [description, complexity];
}

function ldsChurch() {
    var description = [
        "This idea came along while studying the origins of the FamilySearch organization.",
        "The idea consists in trying to draw some correlations between the church origins, the main emplacements held by the church and the data gathered by the FamilySearch organization.",
        "Does the data stored by the organization mainly relate to those rich historical places for the LDS? Can these places be deducted based on the amounts of available registers for the different locations? Could we understand the current places where the church is more active worldwide, based on an extrapolation of the modern registers?",
        "These questions are just some examples of what this functionality could try to explore."
    ];
    var complexity = "70";

    // Return parameters
    return [description, complexity];
}

function ancestryDiversity() {
    var description = [
        "Similarly than the surnames expansion functionality, this feature aims to study how much of different races or ethnicities exist for a given surname.",
        "This idea was inspired by the marketing campaign of Momondo, that can be found on this Youtube link: https://www.youtube.com/watch?v=tyaEQEmt5ls",
        "The main challenge of the project is to find a smart way of weighting the influence of different regions over a surname and even give the evolution of that influence over time.",
        "This project could actually be an ad hoc in deep analysis for some surnames and does not have to be a real time functionality if the developer feels it would be too complicated.",
        "The main purpose of the functionality is to demonstrate, in a simple manner, how global the world actually is."
    ];
    var complexity = "80";

    // Return parameters
    return [description, complexity];
}

function collections() {
    var description = [
        "This functionality aims to create a smart search feature, that given a country and period of time, would list all the FamilySearch available collections, that contained data for the inputted search criteria.",
        "The application could actually list the name of the collections, the number of registers that they cover, how many of those registers are already accessible through FamilySearch, how many are waiting to be indexed, etcetera.",
        "This functionality aims to solve one of the hardest questions to answer related to FamilySearch, without having to explore thousands of person results. That question is: Is it likely that the information I’m looking for exists in the FamilySearch Family Tree?"
    ];
    var complexity = "55";

    // Return parameters
    return [description, complexity];
}

function natalityMortality() {
    var description = [
        "Over time the world has gone through different events that have shaped its population. One of these events has been the Second World War.",
        "The goal of this project is to study how natality and mortality ratios changed for the main involved countries when the war began. In order to give context to this study, it would be good to widen up the window of time, to include more years than those of conflict.",
        "Another exercise that can be conducted related to this proposal, is to study how well this natality and mortality ratios extracted from FamilySearch, reflect the real impact suffered by each country."
    ];
    var complexity = "50";

    // Return parameters
    return [description, complexity];
}

function marriages() {
    var description = [
        "Randal S. Olson conducted a study that demonstrated that when the United States joined the Second World War, a huge increase on the number of marriages was registered all over the country.",
        "The study can be found on the following link: http://www.randalolson.com/2015/06/15/144-years-of-marriage-and-divorce-in-1-chart/",
        "This functionality aims to reproduce the study conducted by Randal and compare how close the FamilySearch data is, to the data used by Randal. In case of deviation, the project could study why that deviation exists.",
        "An expansion of this project could be the study this same effect for the other involved countries and study the possible similarities and differences."
    ];
    var complexity = "50";

    // Return parameters
    return [description, complexity];
}

function schindler() {
    var description = [
        "This project is a little different from the other ones related to the Second World War, but it got to me when I found the emigration certificate of Wladyslaw Szpilman on FamilySearch, also known as ‘The Pianist’.",
        "The idea of this project is to study the story of the Jews collective, during the second world war timespan, through the surnames of those persons that are nowadays known as the Schindler’s List.",
        "The project could extract the surnames of the people found on the list and try to study things like, how the number of persons found by those surnames changed over time, where did they go or emigrate, what trace of genealogical documents has been left behind, etcetera."
    ];
    var complexity = "70";

    // Return parameters
    return [description, complexity];
}

function greatDepression() {
    var description = [
        "This project is another example of a big historical event, that could be studied through the genealogical data. Of course, any other event that had a worldwide impact, could be studied in a similar way.",
        "This functionality or ad hoc analysis, is aimed at studying how the United States populations changed or suffered, through the great depression. Did mortality increase? Did people try to leave the country?",
        "These are just a couple of questions that the project could study, but there are plenty more opportunities that people can come up with. For example, study the effect on different big cities of the United States and compare the effects."
    ];
    var complexity = "65";

    // Return parameters
    return [description, complexity];
}

function socialMedia() {
    var description = [
        "This project is about creating a platform that interacts both with the FamilySearch API and one or some, of the most well known social media websites, like Facebook or Twitter.",
        "The idea of this project is to provide funny comparison tools around a Person and its friends. For example, who has the most typical name through different periods of time? Who is most likely to have ascendancy in a specific country? Etcetera.",
        "The platform could offer tools to filter the friends or followers, that we want to consider for our analysis and enable them to publish the results on their Facebook wall or Twitter timeline."
    ];
    var complexity = "75";

    // Return parameters
    return [description, complexity];
}

function fsReality() {
    var description = [
        "This project, more than representing a specific idea, is actually a collection of ideas. This website represents a project that was not able to fully explore the potential of all the FamilySearch API functionalities. These ideas, aim to help on the further study of this API.",
        "The idea would be to study some genealogical data from official sources, for example: the specific country childhood mortality over the years, average number of children per family, average age of people in a country, etcetera, etcetera, and contrast it with the same data accessible through the FamilySearch API.",
        "The goal of these projects would be to understand how well the FamilySearch data represents the reality, in countries with a huge number of registers and in countries with fewer registers."
    ];
    var complexity = "85";

    // Return parameters
    return [description, complexity];
}

function genealogies() {
    var description = [
        "This project is centered on the study of the accessible Genealogies from FamilySearch.",
        "The main idea is to study how Genealogies evolved over the years. How many generations are usually linked together? What kind of information is more likely to be stored for those genealogies? Is people losing the tradition of maintaining family trees over time?",
        "These are just a few sample questions of what could be done with genealogies, but any other related topic that could be explored (it requires the study of the genealogies API resource), would be more than welcome on this study."
    ];
    var complexity = "80";

    // Return parameters
    return [description, complexity];
}

function duplicates() {
    var description = [
        "This project is based on the duplication algorithm created by FamilySearch.",
        "The main idea would be to search for persons and their duplicates and try to understand the most common causes of why they are marked as duplicates. Is it a lack of overall information? A common match on name and surname?",
        "The goal of the project would be to comprehend the duplicity rules created by FamilySearch, understand how good they are and try to come up with some possible modifications or extensions, that could improve the duplication detection algorithms."
    ];
    var complexity = "70";

    // Return parameters
    return [description, complexity];
}

function search() {
    var description = [
        "This functionality enables you to search over all the available person instances included on the FamilyTree model from FamilySearch.",
        "The goal of this functionality is to expose how the person’s search functionality works, which parameters can be used to filter the results and what data is easily accessed from the search response.",
        "This functionality though, is not trying to expose all the accessible data through the response. If we were to print everything, for all the relatives of a given person, the load of information to be displayed would interfere with the main purpose of the tool, which is to clearly expose the main data related to the Person FamilySearch resource.",
        "Additionally, this functionality features the search over the family tree as an exploration tool. Therefore, it only allows you to check the details of a person returned by the search functionality."
    ];
    var complexity = "50";

    // Return parameters
    return [description, complexity];
}

function surnames() {
    var description = [
        "The surname functionality enables you to check how many instances of a given surname are registered on a set of countries in a specific set of years.",
        "The goal of this feature is to understand how a surname expanded over the years on a set of different countries or continents. With this simple tool, we aim to find were the ancestors of a given surname might have come from and how many different ethnicities have instances of that surname.",
        "We do notice that this tool is far from solving the two questions on the above paragraph, but this feature is just a prototype of what could actually be implemented and might result helpful when trying to understand how global the world actually is."
    ];
    var complexity = "80";

    // Return parameters
    return [description, complexity];
}

function facts() {
    var description = [
        "The Facts functionality enables you to check how many instances, of one of the three most common facts in a person’s life, were recorded around a certain year and a specific location.",
        "The goal of this feature is to explore if some global events, could have affected the number of birth, marriages or death occurrences, for the populations that went through wars, epidemics or important political decisions.",
        "You can search for Births, Marriages and Deaths occurrences on a certain place and around a given year."
    ];
    var complexity = "70";

    // Return parameters
    return [description, complexity];
}

/* start: FUNCTION TO RETURN PROPOSALS */
var projectProposals = function () {
    var self = this;

    /* Get specific example */
    self.getExample = function (keyword) {
        if(keyword == 'search') return search();
        else if(keyword == 'surnames') return surnames();
        else if(keyword == 'facts') return facts();
        else if(keyword == 'names-popularity') return namesPopularity();
        else if(keyword == 'catalan-portal') return catalanPortal();
        else if(keyword == 'improved-surname-geo') return improvedSurnameGeo();
        else if(keyword == 'genealogy-heraldy') return genealogyHeraldy();
        else if(keyword == 'indexing-projects') return indexingProjects();
        else if(keyword == 'lds-church') return ldsChurch();
        else if(keyword == 'ancestry-diversity') return ancestryDiversity();
        else if(keyword == 'collections') return collections();
        else if(keyword == 'natality-mortality') return natalityMortality();
        else if(keyword == 'marriages') return marriages();
        else if(keyword == 'schindler') return schindler();
        else if(keyword == 'great-depression') return greatDepression();
        else if(keyword == 'social-media') return socialMedia();
        else if(keyword == 'fs-vs-reality') return fsReality();
        else if(keyword == 'genealogies') return genealogies();
        else if(keyword == 'duplicates') return duplicates();
    };

}; /* end: FUNCTION TO RETURN PROPOSALS */

module.exports = projectProposals;
