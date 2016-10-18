// Generated by typings
// Source: https://raw.githubusercontent.com/DefinitelyTyped/DefinitelyTyped/a396c170ba4b6a7f45b20fccbdba0d2b81cc8833/pouchdb-node/pouchdb-node.d.ts
declare namespace PouchDB {
    namespace Core {
        interface DatabaseInfo {
            /** The backend *DOWN adapter being used (MemDOWN, RiakDOWN, …). */
            backend_adapter?: string;
        }
    }
}

declare module 'pouchdb-node' {
    const PouchDb: PouchDB.Static;
    export = PouchDb;
}