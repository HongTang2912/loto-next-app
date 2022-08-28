import neo4j from 'neo4j-driver';
import config from '../config'

const PATH = config.NEO4J_DB_CONFIG.PATH;
const USERNAME = config.NEO4J_DB_CONFIG.USERNAME;
const PASSWORD = config.NEO4J_DB_CONFIG.PASSWORD;


export async function readData() {
    let data = [];
    const driver = await neo4j.driver(PATH, neo4j.auth.basic(USERNAME, PASSWORD));
    const session = await driver.session();

    try {
        const result = await session.run("MATCH (a:User) return a");
        const records = result.records;
        records.forEach(async (rec) => {
            await data.push(rec.get(0).properties);
        });

        // await console.log(data);
    } catch (err) {
        await console.error(err);
    } finally {
        await session.close();
    }

    // on application exit:
    await driver.close();
    return data;
}


export async function createUser(player) {
    let data = [];
    const driver = await neo4j.driver(PATH, neo4j.auth.basic(USERNAME, PASSWORD));
    const session = await driver.session();

    try {
        const result = await session.run(
            `MERGE (a:User {player: $player}) return a`,
            {
                player: player
            }
        );
        return result

        // await console.log(data);
    } catch (err) {
        await console.error(err);
    } finally {
        await session.close();
    }

    // on application exit:
    await driver.close();
}

