class Dates {
	constructor(date) {
		this.date = date;
		this.dateTime = this.date.getTime();
	}

	get today() {
		return { today: this.date.toISOString().slice(0, 10), todayString: this.date.toLocaleDateString() };
	}

	get yesterday() {
		let yesterday = new Date(this.dateTime - 24 * 3600 * 1000);
		return { yesterdayDate: yesterday.toISOString().slice(0, 10), yesterdayString: yesterday.toLocaleDateString() };
	}
	get tomorrow() {
		let tomorrow = new Date(this.dateTime + 24 * 3600 * 1000);
		return { tomorrowDate: tomorrow.toISOString().slice(0, 10), tomorrowString: tomorrow.toLocaleDateString() };
	}

	get weekDays() {
		let firstDay = this.date;
		let lastDay = firstDay;
		let day = firstDay.getDay() || 7;
		if (day !== 1) {
			firstDay.setHours(-24 * (day - 1));
			lastDay.setHours(24 * (7 - day + 1));
		}

		return { monday: firstDay.toISOString().slice(0, 10), sunday: lastDay.toISOString().slice(0, 10) };
	}

	get monthDays() {
		let year = this.date.getFullYear();
		let month = this.date.getMonth();
		let firstDay = new Date(year, month, 1);
		let lastDay = new Date(year, month + 1, 0);

		return { firstDay: firstDay.toLocaleDateString("en-CA"), lastDay: lastDay.toLocaleDateString("en-CA") };
	}
}

const daysUtils = new Dates(new Date());

export const dateOptions = [
	{
		text: "Завтра " + daysUtils.tomorrow.tomorrowString,
		dates: { date: daysUtils.tomorrow.tomorrowDate, endDate: "" },
		val: "tomorrow",
		selected: false,
		choice: false,
	},
	{
		text: "Сегодня " + daysUtils.today.todayString,
		dates: { date: daysUtils.today.today, endDate: "" },
		val: "today",
		selected: true,
		choice: false,
	},
	{
		text: "Вчера " + daysUtils.yesterday.yesterdayString,
		dates: { date: daysUtils.yesterday.yesterdayDate, endDate: "" },
		val: "yesterday",
		selected: false,
		choice: false,
	},
	{
		text: "Неделя",
		dates: { date: daysUtils.weekDays.monday, endDate: daysUtils.weekDays.sunday },
		val: "week",
		selected: false,
		choice: false,
	},
	{
		text: "Месяц",
		dates: { date: daysUtils.monthDays.firstDay, endDate: daysUtils.monthDays.lastDay },
		val: "month",
		selected: false,
		choice: false,
	},
	{ text: "Период", dates: { date: "yesterdayDate", endDate: "" }, val: "period", selected: false, choice: true },
];

export const payValues = [
	{
		text: "Оплата",
		val: false,
		selected: true,
	},
	{
		text: "Не оплачен",
		val: false,
		selected: false,
	},
	{
		text: "Оплачен",
		val: false,
		selected: false,
	},
];

export const workerValues = [
	{
		text: "Все сотрудники",
		val: "all",
		selected: true,
	},
	{
		text: "С сотрудником",
		val: "with",
		selected: false,
	},
	{
		text: "Без сотрудника",
		val: "without",
		selected: false,
	},
];

export const statusValues = [
	{
		text: "Все статусы",
		val: "all",
		selected: true,
	},
	{
		text: "Новый",
		val: "new",
		selected: true,
	},
	{
		text: "В пути",
		val: "onWay",
		selected: false,
	},
	{
		text: "Выполнен",
		val: "completed",
		selected: false,
	},
];
