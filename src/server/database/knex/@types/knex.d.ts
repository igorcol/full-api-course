import { ICidade } from "../../models";



declare module 'knex/types/tables' {
    interface Tables {
       cidade: ICidade
        //TODO: pessoa: IPessoa
        //TODO: usuario: IUsuario
    }
}