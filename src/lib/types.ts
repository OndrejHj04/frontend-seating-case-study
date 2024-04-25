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
}

export interface eventTickets {
  ticketTypes: [ticketDetail];
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
