export interface event {
  eventId: string;
  namePub: string;
  description: string;
  currencyIso: string;
  dateFrom: string;
  dateTo: string;
  headerImageUrl: string;
  place: string;
}

export interface ticketDetail {
  id: string;
  name: string;
  price: number;
  seatId: string;
  place?: number;
  row?: number;
}

export interface eventTickets {
  ticketTypes: [{ id: string; name: string; price: number }];
  seatRows: [
    {
      seatRow: number;
      seats: [
        {
          seatId: string;
          place: number;
          ticketTypeId: string;
        }
      ];
    }
  ];
}

export interface userType {
  firstName: "string";
  lastName: "string";
  email: "string";
}

export interface userLoginResponse {
  message: "string";
  user?: userType;
}

export interface orderType {
  message: string;
  orderId?: string;
  tickets?: [];
  user?: {
    email: string;
    firstName: string;
    lastName: string;
  };
  totalAmount?: number;
}
