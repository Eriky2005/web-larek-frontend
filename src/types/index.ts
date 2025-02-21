export interface ICard {
    "id": string,
    "description"?: string,
    "image"?: string,
    "title": string,
    "category"?: string,
    "price": number | null;
}

export interface IOrder {
    payment: string;
    address: string;
    email: string;
    phone: string;
    total: number;
    items: string[];
}

export interface IOrderResult {
    id: string;
    total: number;
}

export interface IAppData {
    itemsBasket: Map<string,number>;
    cards: ICard[];
    preview: string | null;
    order: TOrder;
    addToBasket(id: string): void;
    deleteToBasket(id: string, payload: Function | null ): void;
    setCards(items: ICard[]): void;
    getCard(id: string): ICard;
    clearBasket(): void;
    isInBasket(id: string): void;
    clearOrder(): void;
    validateOrder(): void;
    validateContacts(): void;
    getTotal(): void;
    setOrderField(field: keyof TOrder, value: string): void;
}

export interface IModalData {
    content: HTMLElement;
}

export interface IFormState {
    valid: boolean;
    errors: string[];
}

export interface ISuccess {
    total: number;
}

export interface ISuccessActions {
    onClick: () => void;
}

export interface ICardActions {
    onClick: (event: MouseEvent) => void;
}

export interface IWebLarekAPI {
	getCardList: () => Promise<ICard[]>;
	getProduct: (id: string) => Promise<ICard>;
	createOrder: (order: IOrder) => Promise<IOrderResult>;
}

export type TOrderForm = Pick<IOrder, 'payment' | 'address'>;

export type TContactsForm = Pick<IOrder, 'email' | 'phone'>;

export type TOrder = Omit<IOrder, 'items' | 'total'>