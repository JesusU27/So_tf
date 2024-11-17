import BaseService from './base.service.js';


export class ChallengesService extends BaseService {
    constructor() {
        super();
    }

    async getAllChallenges() {
        try {
            const challenges = await this.getAll("Challenges");

            if (!challenges || !Array.isArray(challenges)) {
                console.error("No challenges found or unexpected data format.");
                return [];
            }

            return challenges;
        } catch (error) {
            console.error("Error fetching challenges:", error.message);
            return [];
        }
    }

    async getMyChallenges(challenges) {
        try {
            // Obtener todos los challenges de la API
            const allChallenges = await this.getAll("Challenges");

            if (!allChallenges || allChallenges.length === 0) {
                console.warn("No challenges found in the API");
                return null;
            }


            // Filtrar los challenges que coincidan con los IDs proporcionados
            const challengeSearched = challenges
                .map((challenge) =>
                    allChallenges.find((c) => c.id === challenge.challenge_id)
                )
                .filter((challenge) => challenge); // Filtra los valores nulos

            console.log("Filtered challenges:", challengeSearched);

            // Retornar los challenges encontrados
            return challengeSearched.length > 0 ? challengeSearched : null;
        } catch (error) {
            console.error("Error fetching challenges:", error.message);
            return null;
        }
    }
}