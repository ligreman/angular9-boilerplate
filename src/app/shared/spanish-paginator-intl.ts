import { MatPaginatorIntl } from "@angular/material";

/**
 * Sobrescribo la clase original para añadir los textos en español
 */
export class matPaginatorIntlSpanish extends MatPaginatorIntl {
    itemsPerPageLabel = "Elementos por página:";
    nextPageLabel = "Página siguiente";
    previousPageLabel = "Página anterior";

    getRangeLabel: any = function(
        page: number,
        pageSize: number,
        length: number
    ): string {
        if (length === 0 || pageSize === 0) {
            return "0 de " + length;
        }
        length = Math.max(length, 0);
        const startIndex: number = page * pageSize;
        // If the start index exceeds the list length, do not try and fix the end index to the end.
        const endIndex: number =
            startIndex < length
                ? Math.min(startIndex + pageSize, length)
                : startIndex + pageSize;
        return startIndex + 1 + " - " + endIndex + " de " + length;
    };
}
