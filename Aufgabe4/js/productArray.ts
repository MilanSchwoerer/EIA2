namespace Aufgabe4 {
    export interface Product {
        name: string;
        price: number;
    }

    export let tree: Product[] = [{ name: "", price: 0 }, { name: "Nordmantanne (50 Euro)", price: 50 }, { name: "Fichte (40 Euro)", price: 40 } ];
    export let christmasBall: Product[] = [{ name: "", price: 0 }, { name: "Rot 10 Stück (5 Euro)", price: 5 }, { name: "Rot 15 Stück (7.50 Euro)", price: 7.5 }, { name: "Rot 20 Stück (10 Euro)", price: 10 }, { name: "Gold 10 Stück (10 Euro)", price: 10 }, { name: "Gold 15 Stück (15 Euro)", price: 15 }, { name: "Gold 20 Stück (20 Euro)", price: 20 }, { name: "Grün 10 Stück (4 Euro)", price: 4 }, { name: "Grün 15 Stück (6 Euro)", price: 6 }, { name: "Grün 20 Stück (8 Euro)", price: 8 }];
    export let tinsel: Product[] = [{ name: "", price: 0 }, { name: "Lametta Gold 50cm (3 Euro)", price: 3 }, { name: "Lametta Gold 100cm (6 Euro)", price: 6 }, { name: "Lametta Silber 50cm (2 Euro)", price: 2 }, { name: "Lametta Silber 100cm (4 Euro)", price: 4 }, { name: "Lametta Rot 50cm (3 Euro)", price: 3 }, { name: "Lametta Rot 100cm (6 Euro)", price: 6 }];
    export let holder: Product[] = [{ name: "", price: 0 }, { name: "Halterung Rot (20 Euro)", price: 20 }, { name: "Halterung Grün (22 Euro)", price: 22 }];
    export let delivery: Product[] = [{ name: "", price: 0 }, { name: "UPS (15 Euro)", price: 15 }, { name: "DHL (12 Euro)", price: 12 }, { name: "Hermes (14 Euro)", price: 14 }];
    export let candle: Product[] = [{ name: "", price: 0 }, { name: "Kerzen rot (7 Euro)", price: 7 }, { name: "Kerzen elektrisch (15 Euro)", price: 15 }, { name: "Kerzen gold (10 Euro)", price: 10 }];
}