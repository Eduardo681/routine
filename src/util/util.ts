export default {
  methods: {
    formatDate(dateStr: string): string {
      const weekdays = ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"];
      const months = [
        "janeiro",
        "fevereiro",
        "março",
        "abril",
        "maio",
        "junho",
        "julho",
        "agosto",
        "setembro",
        "outubro",
        "novembro",
        "dezembro",
      ];

      const date = new Date(dateStr + "T00:00:00");
      const dayOfWeek = weekdays[date.getDay()];
      const dayOfMonth = date.getDate();
      const month = months[date.getMonth()];

      return `${dayOfWeek}, ${dayOfMonth} de ${month}`;
    },
    formatTime(time: string): string {
      return `${time.substring(0, 5)}`;
    },
  },
};
