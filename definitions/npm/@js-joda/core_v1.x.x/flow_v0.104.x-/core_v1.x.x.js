// This is manually converted from the Typescript types maintained by the
// js-joda library https://github.com/js-joda/js-joda/blob/master/packages/core/dist/js-joda.d.ts
// Note that it is different from the generated Flow types provided by js-joda
declare module 'js-joda' {
	declare class TemporalAccessor {
		get(field: ChronoField): number;
		query(query: TemporalQuery): any;
		range(field: ChronoField): ValueRange;
	}
	declare class Temporal extends TemporalAccessor {}
	declare class Instant extends Temporal implements TemporalAdjuster {
		static from(TemporalAccessor): Instant;
		static now(): Instant;
		static ofEpochMilli(epochMilli: number): Instant;
		static ofEpochSecond(epochSecond: number): Instant;
		static parse(text: string): Instant;
		adjustInto(temporal: TemporalAdjuster): Temporal;
		compareTo(otherInstant: Instant): number;
		epochSecond(): number;
		equals(otherInstant: any): boolean;
		get(field: ChronoField): number;
		getLong(field: ChronoField): number;
		hashCode(): number;
		isAfter(otherInstant: Instant): boolean;
		isBefore(otherInstant: Instant): boolean;
		isSupported(fieldOrUnit: ChronoField | TemporalUnit): boolean;
		minus(amount: TemporalAmount): Instant;
		minus(amountToSubtract: number, unit: TemporalUnit): Instant;
		minusMillis(millisToSubtract: number): Instant;
		minusNanos(nanosToSubtract: number): Instant;
		minusSeconds(secondsToSubtract: number): Instant;
		nano(): number;
		plus(amount: TemporalAmount): Instant;
		plus(amountToAdd: number, unit: TemporalUnit): Instant;
		plusMillis(millisToAdd: number): Instant;
		plusNanos(nanosToAdd: number): Instant;
		plusSeconds(secondsToAdd: number): Instant;
		query(query: TemporalQuery): any;
		range(field: ChronoField): ValueRange;
		toEpochMilli(): number;
		toString(): string;
		truncatedTo(unit: TemporalUnit): Instant;
		until(endExclusive: Temporal, unit: TemporalUnit): number;
		with(adjuster: TemporalAdjuster): Instant;
		with(field: ChronoField, newValue: number): Instant;
		withTemporalAdjuster(adjuster: TemporalAdjuster): Instant;
	}
	declare class Clock {
		static fixed(fixedInstant: Instant, zoneOffset: ZoneOffset): Clock;
		static system(zone: ZoneId): Clock;
		static systemDefaultZone(): Clock;
		static systemUTC(): Clock;
		instant(): Instant;
		millis(): number;
		zone(): any;
	}
	declare class DayOfWeek extends Temporal implements TemporalAdjuster {
		static MONDAY: DayOfWeek;
		static TUESDAY: DayOfWeek;
		static WEDNESDAY: DayOfWeek;
		static THURSDAY: DayOfWeek;
		static FRIDAY: DayOfWeek;
		static SATURDAY: DayOfWeek;
		static SUNDAY: DayOfWeek;
		static from(temporal: TemporalAccessor): DayOfWeek;
		static of(dayOfWeek: number): DayOfWeek;
		// $FlowFixMe - Flow doesn't allow changing signatures of parent classes (Object.valueOf) https://github.com/facebook/flow/issues/4953
		// static valueOf(name: string): DayOfWeek;
		static values(): Array<DayOfWeek>;
		adjustInto(temporal: TemporalAdjuster): this;
		equals(other: any): boolean;
		getDisplayName(style: TextStyle, locale: Locale): string;
		getLong(field: ChronoField): number;
		isSupported(field: ChronoField): boolean;
		minus(days: number): DayOfWeek;
		name(): string;
		ordinal(): number;
		plus(days: number): DayOfWeek;
		toString(): string;
		value(): number;
	}
	declare class TemporalAmount {
		addTo<T: Temporal>(temporal: T): T;
		get(unit: TemporalUnit): number;
		units(): Array<TemporalUnit>;
		subtractFrom<T: Temporal>(temporal: T): T;
	}
	declare class Duration extends TemporalAmount {
		static ZERO: Duration;
		static between(startInclusive: Temporal, endExclusive: Temporal): Duration;
		static from(amount: TemporalAmount): Duration;
		static of(amount: number, unit: TemporalUnit): Duration;
		static ofDays(days: number): Duration;
		static ofHours(hours: number): Duration;
		static ofMillis(millis: number): Duration;
		static ofMinutes(minutes: number): Duration;
		static ofNanos(nanos: number): Duration;
		static ofSeconds(seconds: number): Duration;
		static parse(text: string): Duration;
		abs(): Duration;
		addTo<T: Temporal>(temporal: T): T;
		compareTo(otherDuration: Duration): number;
		dividedBy(divisor: number): Duration;
		equals(otherDuration: any): boolean;
		get(unit: TemporalUnit): number;
		isNegative(): boolean;
		isZero(): boolean;
		minus(durationOrNumber: Duration | number, unit: ChronoUnit): Duration;
		minusAmountUnit(amountToSubtract: number, unit: TemporalUnit): Duration;
		minusDays(daysToSubtract: number): Duration;
		minusDuration(duration: Duration): Duration;
		minusHours(hoursToSubtract: number): Duration;
		minusMillis(millisToSubtract: number): Duration;
		minusMinutes(minutesToSubtract: number): Duration;
		minusNanos(nanosToSubtract: number): Duration;
		minusSeconds(secondsToSubtract: number): Duration;
		multipliedBy(multiplicand: number): Duration;
		nano(): number;
		negated(): Duration;
		plus(
			durationOrNumber: Duration | number,
			unitOrNumber: TemporalUnit | number
		): Duration;
		plusAmountUnit(amountToAdd: number, unit: TemporalUnit): Duration;
		plusDays(daysToAdd: number): Duration;
		plusDuration(duration: Duration): Duration;
		plusHours(hoursToAdd: number): Duration;
		plusMillis(millisToAdd: number): Duration;
		plusMinutes(minutesToAdd: number): Duration;
		plusNanos(nanosToAdd: number): Duration;
		plusSeconds(secondsToAdd: number): Duration;
		plusSecondsNanos(secondsToAdd: number, nanosToAdd: number): Duration;
		seconds(): number;
		subtractFrom<T: Temporal>(temporal: T): T;
		toDays(): number;
		toHours(): number;
		toJSON(): string;
		toMillis(): number;
		toMinutes(): number;
		toNanos(): number;
		toString(): string;
		units(): any;
		withNanos(nanoOfSecond: number): Duration;
		withSeconds(seconds: number): Duration;
	}

	declare class ResolverStyle {
		static STRICT: ResolverStyle;
		static SMART: ResolverStyle;
		static LENIENT: ResolverStyle;
	}
	declare class DateTimeFormatter {
		static ISO_LOCAL_DATE: DateTimeFormatter;
		static ISO_LOCAL_TIME: DateTimeFormatter;
		static ISO_LOCAL_DATE_TIME: DateTimeFormatter;
		static ISO_INSTANT: DateTimeFormatter;
		static ISO_OFFSET_DATE_TIME: DateTimeFormatter;
		static ISO_ZONED_DATE_TIME: DateTimeFormatter;
		static ofPattern(pattern: string): DateTimeFormatter;
		static parsedExcessDays(): TemporalQuery;
		static parsedLeapSecond(): boolean;
		chronology(): any;
		decimalStyle(): any;
		format(temporal: TemporalAccessor): string;
		locale(): any;
		parse(text: string, type: TemporalQuery): TemporalAccessor;
		parse1(text: string): TemporalAccessor;
		parse2(text: any, type: any): any;
		parseUnresolved(text: any, position: any): any;
		toString(): string;
		withChronology(chrono: any): any;
		withLocale(): DateTimeFormatter;
		withResolverStyle(resolverStyle: ResolverStyle): DateTimeFormatter;
	}
	declare class DateTimeFormatterBuilder {
		append(formatter: DateTimeFormatter): DateTimeFormatterBuilder;
		appendFraction(
			field: ChronoField,
			minWidth: number,
			maxWidth: number,
			decimalPoint: boolean
		): DateTimeFormatterBuilder;
		appendInstant(fractionalDigits: number): DateTimeFormatterBuilder;
		appendLiteral(literal: any): DateTimeFormatterBuilder;
		appendOffset(pattern: string, noOffsetText: string): DateTimeFormatterBuilder;
		appendOffsetId(): DateTimeFormatterBuilder;
		appendPattern(pattern: string): DateTimeFormatterBuilder;
		appendValue(): DateTimeFormatterBuilder;
		appendValueReduced(): DateTimeFormatterBuilder;
		appendZoneId(): DateTimeFormatterBuilder;
		optionalEnd(): DateTimeFormatterBuilder;
		optionalStart(): DateTimeFormatterBuilder;
		padNext(): DateTimeFormatterBuilder;
		parseCaseInsensitive(): DateTimeFormatterBuilder;
		parseCaseSensitive(): DateTimeFormatterBuilder;
		parseLenient(): DateTimeFormatterBuilder;
		parseStrict(): DateTimeFormatterBuilder;
		toFormatter(resolverStyle: ResolverStyle): DateTimeFormatter;
	}
	declare class Chronology {
		// TODO: this
	}
	declare class LocalTime extends Temporal implements TemporalAdjuster {
		static MIN: LocalTime;
		static MAX: LocalTime;
		static MIDNIGHT: LocalTime;
		static NOON: LocalTime;

		static HOURS_PER_DAY: number;
		static MINUTES_PER_HOUR: number;
		static MINUTES_PER_DAY: number;
		static SECONDS_PER_MINUTE: number;
		static SECONDS_PER_HOUR: number;
		static SECONDS_PER_DAY: number;
		static MILLIS_PER_DAY: number;
		static MICROS_PER_DAY: number;
		static NANOS_PER_SECOND: number;
		static NANOS_PER_MINUTE: number;
		static NANOS_PER_HOUR: number;
		static NANOS_PER_DAY: number;
		static from(temporal: TemporalAccessor): LocalTime;
		static now(clockOrZone?: Clock | ZoneId): LocalTime;
		static of(
			hour?: number,
			minute?: number,
			second?: number,
			nanoOfSecond?: number
		): LocalTime;
		static ofInstant(instant: Instant, zone?: ZoneId): LocalTime;
		static ofNanoOfDay(nanoOfDay: number): LocalTime;
		static ofSecondOfDay(secondOfDay?: number, nanoOfSecond?: number): LocalTime;
		static parse(text: string, formatter?: DateTimeFormatter): LocalTime;
		adjustInto(temporal: TemporalAdjuster): Temporal;
		atDate(date: LocalDate): LocalDateTime;
		compareTo(other: LocalTime): number;
		equals(other: any): boolean;
		format(formatter: DateTimeFormatter): string;
		get(field: ChronoField): number;
		getLong(field: ChronoField): number;
		hashCode(): number;
		hour(): number;
		isAfter(other: LocalTime): boolean;
		isBefore(other: LocalTime): boolean;
		isSupported(fieldOrUnit: ChronoField | ChronoUnit): boolean;
		minus(amount: TemporalAmount): LocalTime;
		minus(amountToSubtract: number, unit: ChronoUnit): LocalTime;
		minusHours(hoursToSubtract: number): LocalTime;
		minusMinutes(minutesToSubtract: number): LocalTime;
		minusNanos(nanosToSubtract: number): LocalTime;
		minusSeconds(secondsToSubtract: number): LocalTime;
		minute(): number;
		nano(): number;
		plus(amount: TemporalAmount): LocalTime;
		plus(amountToAdd: number, unit: TemporalUnit): LocalTime;
		plusHours(hoursToAdd: number): LocalTime;
		plusMinutes(minutesToAdd: number): LocalTime;
		plusNanos(nanosToAdd: number): LocalTime;
		plusSeconds(secondstoAdd: number): LocalTime;
		query(query: TemporalQuery): any;
		range(field: ChronoField): ValueRange;
		second(): number;
		toJSON(): string;
		toNanoOfDay(): number;
		toSecondOfDay(): number;
		toString(): string;
		truncatedTo(unit: ChronoUnit): LocalTime;
		until(endExclusive: TemporalAccessor, unit: TemporalUnit): number;
		with(adjuster: TemporalAdjuster): LocalTime;
		with(field: ChronoField, newValue: number): LocalTime;
		withHour(hour: number): LocalTime;
		withMinute(minute: number): LocalTime;
		withNano(nanoOfSecond: number): LocalTime;
		withSecond(second: number): LocalTime;
		withTemporalAdjuster(adjuster: TemporalAdjuster): LocalTime;
	}
	declare class MathUtil {
		static compareNumbers(a: number, b: number): number;
		static floorDiv(x: number, y: number): number;
		static floorMod(x: number, y: number): number;
		static intDiv(x: number, y: number): number;
		static intMod(x: number, y: number): number;
		static parseInt(value: number): number;
		static roundDown(r: number): number;
		static safeAdd(x: number, y: number): number;
		static safeMultiply(x: number, y: number): number;
		static safeSubtract(x: number, y: number): number;
		static safeToInt(value: number): number;
		static safeZero(value: number): number;
		static verifyInt(value: number): void;
	}
	declare class Month extends Temporal implements TemporalAdjuster {
		static JANUARY: Month;
		static FEBRUARY: Month;
		static MARCH: Month;
		static APRIL: Month;
		static MAY: Month;
		static JUNE: Month;
		static JULY: Month;
		static AUGUST: Month;
		static SEPTEMBER: Month;
		static OCTOBER: Month;
		static NOVEMBER: Month;
		static DECEMBER: Month;
		static from(temporal: TemporalAccessor): Month;
		static of(month: number): Month;
		static values(): Array<Month>;
		adjustInto(temporal: TemporalAdjuster): Temporal;
		firstDayOfYear(leapYear: boolean): number;
		firstMonthOfQuarter(): Month;
		get(field: ChronoField): number;
		getDisplayName(style: TextStyle, locale: Locale): string;
		getLong(field: ChronoField): number;
		isSupported(field: ChronoField): boolean;
		length(leapYear: boolean): number;
		maxLength(): number;
		minLength(): number;
		minus(months: number): Month;
		plus(months: number): Month;
		query(query: TemporalQuery): any;
		toString(): string;
		value(): number;
	}
	declare class MonthDay extends Temporal implements TemporalAdjuster {
		static from(temporal: TemporalAccessor): MonthDay;
		static now(arg1?: ZoneId | Clock): MonthDay;
		static of(monthOrNumber: Month | number, number?: number): MonthDay;
		static ofMonthNumber(month: Month, dayOfMonth: number): MonthDay;
		static ofNumberNumber(month: number, dayOfMonth: number): MonthDay;
		static parse(text: string, formatter?: DateTimeFormatter): MonthDay;
		static parseString(text: string): MonthDay;
		static parseStringFormatter(
			text: string,
			formatter: DateTimeFormatter
		): MonthDay;
		adjustInto(temporal: TemporalAdjuster): Temporal;
		atYear(year: number): LocalDate;
		compareTo(other: MonthDay): number;
		dayOfMonth(): number;
		equals(obj: any): boolean;
		format(formatter: DateTimeFormatter): string;
		get(field: ChronoField): number;
		getLong(field: ChronoField): number;
		isAfter(other: MonthDay): boolean;
		isBefore(other: MonthDay): boolean;
		isSupported(field: ChronoField): boolean;
		isValidYear(year: number): boolean;
		month(): Month;
		monthValue(): number;
		query(query: TemporalQuery): any;
		range(field: ChronoField): ValueRange;
		toString(): string;
		with(month: Month): MonthDay;
		withDayOfMonth(dayOfMonth: number): MonthDay;
		withMonth(month: number): MonthDay;
	}
	declare class ChronoField {
		static NANO_OF_SECOND: ChronoField;
		static NANO_OF_DAY: ChronoField;
		static MICRO_OF_SECOND: ChronoField;
		static MICRO_OF_DAY: ChronoField;
		static MILLI_OF_SECOND: ChronoField;
		static MILLI_OF_DAY: ChronoField;
		static SECOND_OF_MINUTE: ChronoField;
		static SECOND_OF_DAY: ChronoField;
		static MINUTE_OF_HOUR: ChronoField;
		static MINUTE_OF_DAY: ChronoField;
		static HOUR_OF_AMPM: ChronoField;
		static CLOCK_HOUR_OF_AMPM: ChronoField;
		static HOUR_OF_DAY: ChronoField;
		static CLOCK_HOUR_OF_DAY: ChronoField;
		static AMPM_OF_DAY: ChronoField;
		static DAY_OF_WEEK: ChronoField;
		static ALIGNED_DAY_OF_WEEK_IN_MONTH: ChronoField;
		static ALIGNED_DAY_OF_WEEK_IN_YEAR: ChronoField;
		static DAY_OF_MONTH: ChronoField;
		static DAY_OF_YEAR: ChronoField;
		static EPOCH_DAY: ChronoField;
		static ALIGNED_WEEK_OF_MONTH: ChronoField;
		static ALIGNED_WEEK_OF_YEAR: ChronoField;
		static MONTH_OF_YEAR: ChronoField;
		static PROLEPTIC_MONTH: ChronoField;
		static YEAR_OF_ERA: ChronoField;
		static YEAR: ChronoField;
		static ERA: ChronoField;
		static INSTANT_SECONDS: ChronoField;
		static OFFSET_SECONDS: ChronoField;
		baseUnit(): number;
		checkValidIntValue(value: number): number;
		checkValidValue(value: number): any;
		displayName(): string;
		equals(other: any): boolean;
		getFrom(temporal: TemporalAccessor): number;
		isDateBased(): boolean;
		isTimeBased(): boolean;
		name(): string;
		range(): ValueRange;
		rangeRefinedBy(temporal: TemporalAccessor): ValueRange;
		rangeUnit(): number;
		toString(): string;
	}
	declare class TemporalUnit {
		addTo<T: Temporal>(temporal: T, amount: number): T;
		between(temporal1: Temporal, temporal2: Temporal): number;
		duration(): Duration;
		isDateBased(): boolean;
		isDurationEstimated(): boolean;
		isSupportedBy(temporal: Temporal): boolean;
		isTimeBased(): boolean;
	}
	declare class ChronoUnit extends TemporalUnit {
		static MICROS: ChronoUnit;
		static MILLIS: ChronoUnit;
		static SECONDS: ChronoUnit;
		static MINUTES: ChronoUnit;
		static HOURS: ChronoUnit;
		static HALF_DAYS: ChronoUnit;
		static DAYS: ChronoUnit;
		static WEEKS: ChronoUnit;
		static MONTHS: ChronoUnit;
		static YEARS: ChronoUnit;
		static DECADES: ChronoUnit;
		static CENTURIES: ChronoUnit;
		static MILLENNIA: ChronoUnit;
		static ERAS: ChronoUnit;
		static FOREVER: ChronoUnit;
		addTo<T: Temporal>(temporal: T, amount: number): T;
		between(temporal1: Temporal, temporal2: Temporal): number;
		compareTo(other: TemporalUnit): number;
		duration(): Duration;
		isDateBased(): boolean;
		isDurationEstimated(): boolean;
		isSupportedBy(temporal: Temporal): boolean;
		isTimeBased(): boolean;
		toString(): string;
	}
	declare class IsoFields {
		static DAY_OF_QUARTER: IsoFields;
		static QUARTER_OF_YEAR: IsoFields;
		static WEEK_OF_WEEK_BASED_YEAR: IsoFields;
		static WEEK_BASED_YEAR: IsoFields;
		static WEEK_BASED_YEARS: IsoFields;
		static QUARTER_YEARS: IsoFields;
	}
	declare class ChronoLocalDate extends Temporal implements TemporalAdjuster {
		adjustInto(temporal: TemporalAdjuster): Temporal;
		format(formatter: DateTimeFormatter): string;
		isSupported(fieldOrUnit: ChronoField | TemporalUnit): boolean;
	}
	declare class LocalDate extends ChronoLocalDate {
		static MIN: LocalDate;
		static MAX: LocalDate;
		static EPOCH_0: LocalDate;
		static from(temporal: TemporalAccessor): LocalDate;
		static now(clockOrZone?: Clock | ZoneId): LocalDate;
		static of(year: number, month: Month | number, dayOfMonth: number): LocalDate;
		static ofEpochDay(epochDay: number): LocalDate;
		static ofInstant(instant: Instant, zoneId?: ZoneId): LocalDate;
		static ofYearDay(year: number, dayOfYear: number): LocalDate;
		static parse(text: string, formatter?: DateTimeFormatter): LocalDate;
		atStartOfDay(): LocalDateTime;
		atStartOfDay(zone: ZoneId): ZonedDateTime;
		atStartOfDayWithZone(zone: ZoneId): ZonedDateTime;
		atTime(time: LocalTime): LocalDateTime;
		atTime(
			hour: number,
			minute: number,
			second?: number,
			nanoOfSecond?: number
		): LocalDateTime;
		chronology(): Chronology;
		compareTo(other: LocalDate): number;
		dayOfMonth(): number;
		dayOfWeek(): DayOfWeek;
		dayOfYear(): number;
		equals(otherDate: any): boolean;
		get(field: ChronoField): number;
		getLong(field: ChronoField): number;
		hashCode(): number;
		isAfter(other: LocalDate): boolean;
		isBefore(other: LocalDate): boolean;
		isEqual(other: LocalDate): boolean;
		isLeapYear(): boolean;
		isoWeekOfWeekyear(): number; //implemented in IsoFields.js
		isoWeekyear(): number; //implemented in IsoFields.js
		lengthOfMonth(): number;
		lengthOfYear(): number;
		minus(amount: TemporalAmount): LocalDate;
		minus(amountToSubtract: number, unit: TemporalUnit): LocalDate;
		minusDays(daysToSubtract: number): LocalDate;
		minusMonths(monthsToSubtract: number): LocalDate;
		minusWeeks(weeksToSubtract: number): LocalDate;
		minusYears(yearsToSubtract: number): LocalDate;
		month(): Month;
		monthValue(): number;
		plus(amount: TemporalAmount): LocalDate;
		plus(amountToAdd: number, unit: TemporalUnit): LocalDate;
		plusDays(daysToAdd: number): LocalDate;
		plusMonths(monthsToAdd: number): LocalDate;
		plusWeeks(weeksToAdd: number): LocalDate;
		plusYears(yearsToAdd: number): LocalDate;
		query(query: TemporalQuery): any;
		range(field: ChronoField): ValueRange;
		toEpochDay(): number;
		toJSON(): string;
		toString(): string;
		until(endDate: TemporalAccessor): Period;
		until(endExclusive: TemporalAccessor, unit: TemporalUnit): number;
		with(fieldOrAdjuster: ChronoField, newValue: Number): LocalDate;
		with(adjuster: TemporalAdjuster): LocalDate;
		withDayOfMonth(dayOfMonth: number): LocalDate;
		withDayOfYear(dayOfYear: number): LocalDate;
		withFieldAndValue(field: ChronoField, newValue: number): LocalDate;
		withMonth(month: Month | number): LocalDate;
		withTemporalAdjuster(adjuster: TemporalAdjuster): LocalDate;
		withYear(year: number): LocalDate;
		year(): number;
	}
	declare class ChronoLocalDateTime extends Temporal implements TemporalAdjuster {
		adjustInto(temporal: TemporalAdjuster): Temporal;
		chronology(): Chronology;
		toEpochSecond(offset: ZoneOffset): number;
		toInstant(offset: ZoneOffset): Instant;
	}
	declare class LocalDateTime extends ChronoLocalDateTime {
		static MIN: LocalDateTime;
		static MAX: LocalDateTime;
		static from(temporal: TemporalAccessor): LocalDateTime;
		static now(clockOrZone?: Clock | ZoneId): LocalDateTime;
		static ofDateAndTime(date: LocalDate, time: LocalTime): LocalDateTime;
		static ofEpochSecond(epochSecond: number, offset: ZoneOffset): LocalDateTime;
		static ofEpochSecond(
			epochSecond: number,
			nanoOfSecond: number,
			offset: ZoneOffset
		): LocalDateTime;
		static ofInstant(instant: Instant, zoneId?: ZoneId): LocalDateTime;
		static ofNumbers(
			year?: number,
			month?: Month | number,
			dayOfMonth?: number,
			hour?: number,
			minute?: number,
			second?: number,
			nanoSecond?: number
		): LocalDateTime;
		static parse(text: string, formatter?: DateTimeFormatter): LocalDateTime;
		adjustInto(temporal: TemporalAdjuster): LocalDateTime;
		atZone(zone: ZoneId): ZonedDateTime;
		compareTo(other: LocalDateTime): number;
		dayOfMonth(): number;
		dayOfWeek(): DayOfWeek;
		dayOfYear(): number;
		equals(other: any): boolean;
		format(formatter: DateTimeFormatter): string;
		get(field: ChronoField): number;
		getLong(field: ChronoField): number;
		hashCode(): number;
		hour(): number;
		isAfter(other: LocalDateTime): boolean;
		isBefore(other: LocalDateTime): boolean;
		isEqual(other: any): boolean;
		isSupported(fieldOrUnit: ChronoField | TemporalUnit): boolean;
		minus(amount: TemporalAmount): LocalDateTime;
		minus(amountToSubtract: number, unit: TemporalUnit): LocalDateTime;
		minusDays(days: number): LocalDateTime;
		minusHours(hours: number): LocalDateTime;
		minusMinutes(minutes: number): LocalDateTime;
		minusMonths(months: number): LocalDateTime;
		minusNanos(nanos: number): LocalDateTime;
		minusSeconds(seconds: number): LocalDateTime;
		minusTemporalAmount(amount: TemporalAmount): LocalDateTime;
		minusWeeks(weeks: number): LocalDateTime;
		minusYears(years: number): LocalDateTime;
		minute(): number;
		month(): Month;
		monthValue(): number;
		nano(): number;
		plus(amount: TemporalAmount): LocalDateTime;
		plus(amountToAdd: number, unit: TemporalUnit): LocalDateTime;
		plusDays(days: number): LocalDateTime;
		plusHours(hours: number): LocalDateTime;
		plusMinutes(minutes: number): LocalDateTime;
		plusMonths(months: number): LocalDateTime;
		plusNanos(nanos: number): LocalDateTime;
		plusSeconds(seconds: number): LocalDateTime;
		plusTemporalAmount(amount: TemporalAmount): LocalDateTime;
		plusWeeks(weeks: number): LocalDateTime;
		plusYears(years: number): LocalDateTime;
		query(query: TemporalQuery): any;
		range(field: ChronoField): ValueRange;
		second(): number;
		toJSON(): string;
		toLocalDate(): LocalDate;
		toLocalTime(): LocalTime;
		toString(): string;
		truncatedTo(unit: TemporalUnit): LocalDateTime;
		until(endExclusive: Temporal, unit: TemporalUnit): number;
		with(adjuster: TemporalAdjuster): LocalDateTime;
		with(field: ChronoField, newValue: number): LocalDateTime;
		withDayOfMonth(dayOfMonth: number): LocalDateTime;
		withDayOfYear(dayOfYear: number): LocalDateTime;
		withHour(hour: number): LocalDateTime;
		withMinute(minute: number): LocalDateTime;
		withMonth(month: number | Month): LocalDateTime;
		withNano(nanoOfSecond: number): LocalDateTime;
		withSecond(second: number): LocalDateTime;
		withTemporalAdjuster(adjuster: TemporalAdjuster): LocalDateTime;
		withYear(year: number): LocalDateTime;
		year(): number;
	}
	declare class OffsetDateTime {
		// TODO
	}
	declare class Period extends TemporalAmount {
		static ZERO: Period;
		static between(startDate: LocalDate, endDate: LocalDate): Period;
		static create(years: number, months: number, days: number): Duration;
		static from(amount: TemporalAmount): Period;
		static of(years: number, months: number, days: number): Period;
		static ofDays(days: number): Period;
		static ofMonths(months: number): Period;
		static ofWeeks(weeks: number): Period;
		static ofYears(years: number): Period;
		static parse(text: string): Period;
		addTo<T: Temporal>(temporal: T): T;
		chronology(): IsoChronology;
		days(): number;
		equals(obj: any): boolean;
		get(unit: TemporalUnit): number;
		hashCode(): number;
		isNegative(): boolean;
		isZero(): boolean;
		minus(amountToSubtract: TemporalAmount): Period;
		minusDays(daysToSubtract: number): Period;
		minusMonths(monthsToSubtract: number): Period;
		minusYears(yearsToSubtract: number): Period;
		months(): number;
		multipliedBy(scalar: number): Period;
		negated(): Period;
		normalized(): Period;
		plus(amountToAdd: TemporalAmount): Period;
		plusDays(daysToAdd: number): Period;
		plusMonths(monthsToAdd: number): Period;
		plusYears(yearsToAdd: number): Period;
		subtractFrom<T: Temporal>(temporal: T): T;
		toJSON(): string;
		toString(): string;
		toTotalMonths(): number;
		units(): Array<TemporalUnit>;
		withDays(days: number): Period;
		withMonths(months: number): Period;
		withYears(years: number): Period;
		years(): number;
	}
	declare interface TemporalAdjuster {
		adjustInto(temporal: TemporalAdjuster): Temporal;
	}
	declare class TemporalAdjusters {
		static dayOfWeekInMonth(
			ordinal: number,
			dayOfWeek: DayOfWeek
		): TemporalAdjuster;
		static firstDayOfMonth(): TemporalAdjuster;
		static firstDayOfNextMonth(): TemporalAdjuster;
		static firstDayOfNextYear(): TemporalAdjuster;
		static firstDayOfYear(): TemporalAdjuster;
		static firstInMonth(dayOfWeek: DayOfWeek): TemporalAdjuster;
		static lastDayOfMonth(): TemporalAdjuster;
		static lastDayOfYear(): TemporalAdjuster;
		static lastInMonth(dayOfWeek: DayOfWeek): TemporalAdjuster;
		static next(dayOfWeek: DayOfWeek): TemporalAdjuster;
		static nextOrSame(dayOfWeek: DayOfWeek): TemporalAdjuster;
		static previous(dayOfWeek: DayOfWeek): TemporalAdjuster;
		static previousOrSame(dayOfWeek: DayOfWeek): TemporalAdjuster;
	}
	declare class TemporalQueries {
		static chronology(): TemporalQuery;
		static localDate(): TemporalQuery;
		static localTime(): TemporalQuery;
		static offset(): TemporalQuery;
		static precision(): TemporalQuery;
		static zone(): TemporalQuery;
		static zoneId(): TemporalQuery;
	}
	declare class TemporalQuery {
		queryFrom(temporal: TemporalAccessor): any;
	}
	declare class ValueRange {
		static of(min: number, max: number): ValueRange;
		static of(min: number, maxSmallest: number, maxLargest: number): ValueRange;
		static of(
			minSmallest: number,
			minLargest: number,
			maxSmallest: number,
			maxLargest: number
		): ValueRange;
		checkValidIntValue(value: number, field: ChronoField): number;
		checkValidValue(value: number, field: ChronoField): any;
		equals(other: any): boolean;
		hashCode(): number;
		isFixed(): boolean;
		isIntValue(): boolean;
		isValidIntValue(value: number): boolean;
		isValidValue(value: any): boolean;
		largestMinimum(): number;
		maximum(): number;
		minimum(): number;
		smallestMaximum(): number;
		toString(): string;
	}
	declare class Year extends Temporal {
		static MIN_VALUE: number;
		static MAX_VALUE: number;
		static from(temporal: TemporalAccessor): Year;
		static isLeap(year: number): boolean;
		static now(zoneIdOrClock?: ZoneId | Clock): Year;
		static of(isoYear: number): Year;
		static parse(text: string, formatter?: DateTimeFormatter): Year;
		atMonth(monthOrNumber: Month | number): Year;
		plus(amountOrNumber: TemporalAmount | number, unit?: TemporalUnit): Year;
		minus(amountOrNumber: TemporalAmount | number, unit?: TemporalUnit): Year;
	}
	declare class YearMonth extends Temporal {
		static from(temporal: TemporalAccessor): YearMonth;
		static now(zoneIdOrClock?: ZoneId | Clock): YearMonth;
		static of(year: number, monthOrNumber: Month | number): YearMonth;
		static parse(text: string, formatter?: DateTimeFormatter): YearMonth;
		minus(amount: TemporalAmount): YearMonth;
		minus(amountToSubtract: number, unit: TemporalUnit): YearMonth;
		minusYears(yearsToSubtract: number): YearMonth;
		minusMonths(monthsToSubtract: number): YearMonth;
		plus(amount: TemporalAmount): YearMonth;
		plus(amountToAdd: number, unit: TemporalUnit): YearMonth;
		plusYears(yearsToAdd: number): YearMonth;
		plusMonths(monthsToAdd: number): YearMonth;
		with(adjuster: TemporalAdjuster): YearMonth;
		with(field: ChronoField, value: number): YearMonth;
		withYearMonth(newYear: number, newMonth: number): YearMonth;
		withYear(year: number): YearMonth;
		withMonth(month: number): YearMonth;
		isSupported(fieldOrUnit: ChronoField | ChronoUnit): boolean;
		year(): number;
		monthValue(): number;
		month(): Month;
		isLeapYear(): boolean;
		isValidDay(): boolean;
		lengthOfMonth(): number;
		lengthOfYear(): number;
		atDay(dayOfMonth: number): LocalDate;
		atEndOfMonth(): LocalDate;
		compareTo(other: YearMonth): number;
		isAfter(other: YearMonth): boolean;
		isBefore(other: YearMonth): boolean;
		equals(other: YearMonth): boolean;
		toJSON(): string;
		format(formatter: DateTimeFormatter): string;
	}
	declare class ZoneIdBase {
		static systemDefault(): ZoneId;
		static ofOffset(prefix: string, offset: ZoneOffset): ZoneId;
		static from(temporal: TemporalAccessor): ZoneId;
		static getAvailableZoneIds(): Array<string>;
		equals(other: any): boolean;
		hashCode(): number;
		normalized(): ZoneId;
		rules(): ZoneRules;
		toString(): string;
	}
	declare class ZoneId extends ZoneIdBase {
		static SYSTEM: ZoneId;
		static UTC: ZoneId;
		static of(zoneId: string): ZoneId;
	}
	declare class ZoneOffset extends ZoneIdBase implements TemporalAdjuster {
		static MAX_SECONDS: ZoneOffset;
		static UTC: ZoneOffset;
		static MIN: ZoneOffset;
		static MAX: ZoneOffset;
		static of(offsetId: string): ZoneOffset;
		static ofHours(hours: number): ZoneOffset;
		static ofHoursMinutes(hours: number, minutes: number): ZoneOffset;
		static ofHoursMinutesSeconds(
			hours: number,
			minutes: number,
			seconds: number
		): ZoneOffset;
		static ofTotalMinutes(totalMinutes: number): ZoneOffset;
		static ofTotalSeconds(totalSeconds: number): ZoneOffset;
		adjustInto(temporal: TemporalAdjuster): Temporal;
		compareTo(other: ZoneOffset): number;
		equals(obj: any): boolean;
		get(field: ChronoField): number;
		getLong(field: ChronoField): number;
		id(): string;
		query(query: TemporalQuery): any;
		totalSeconds(): number;
	}
	declare class ZoneRegion extends ZoneId {
		static ofId(zoneId: string): ZoneId;
		id(): string;
		rules(): ZoneRules;
	}
	declare class ZoneRules {
		static of(offest: ZoneOffset): ZoneRules;
		isFixedOffset(): boolean;
		isValidOffset(localDateTime: LocalDateTime, offset: ZoneOffset): boolean;
		offset(instantOrLocalDateTime: Instant | LocalDateTime): ZoneOffset;
		offsetOfEpochMilli(epochMilli: number): ZoneOffset;
		offsetOfInstant(instant: Instant): ZoneOffset;
		offsetOfLocalDateTime(localDateTime: LocalDateTime): ZoneOffset;
		_tzdbInfo: { [string]: string, ... };
	}
	declare class ChronoZonedDateTime extends Temporal {
		compareTo(other: ChronoZonedDateTime): number;
		equals(other: any): boolean;
		format(formatter: DateTimeFormatter): string;
		isAfter(other: ChronoZonedDateTime): boolean;
		isBefore(other: ChronoZonedDateTime): boolean;
		isEqual(other: ChronoZonedDateTime): boolean;
		query(query: any): any;
		toEpochSecond(): number;
		toInstant(): Instant;
	}
	declare class ZonedDateTime extends ChronoZonedDateTime {
		static from(temporal: TemporalAccessor): ZonedDateTime;
		static now(clockOrZone?: Clock | ZoneId): ZonedDateTime;
		static of(): any;
		static of(localDateTime: LocalDateTime, zone: ZoneId): ZonedDateTime;
		static of(date: LocalDate, time: LocalTime, zone: ZoneId): ZonedDateTime;
		static of(
			year: number,
			month: number,
			dayOfMonth: number,
			hour: number,
			minute: number,
			second: number,
			nanoOfSecond: number,
			zone: ZoneId
		): ZonedDateTime;
		static of3(date: LocalDate, time: LocalTime, zone: ZoneId): ZonedDateTime;
		static of8(
			year: number,
			month: number,
			dayOfMonth: number,
			hour: number,
			minute: number,
			second: number,
			nanoOfSecond: number,
			zone: ZoneId
		): ZonedDateTime;
		static ofInstant(): ZonedDateTime;
		static ofInstant(instant: Instant, zone: ZoneId): ZonedDateTime;
		static ofInstant(
			localDateTime: LocalDateTime,
			offset: ZoneOffset,
			zone: ZoneId
		): ZonedDateTime;
		static ofInstant2(instant: Instant, zone: ZoneId): ZonedDateTime;
		static ofLocal(
			localDateTime: LocalDateTime,
			zone: ZoneId,
			preferredOffset: ZoneOffset
		): ZonedDateTime;
		static ofStrict(
			localDateTime: LocalDateTime,
			offset: ZoneOffset,
			zone: ZoneId
		): ZonedDateTime;
		static parse(text: string, formatter?: DateTimeFormatter): ZonedDateTime;
		dayOfMonth(): number;
		dayOfWeek(): DayOfWeek;
		dayOfYear(): number;
		equals(other: any): boolean;
		format(formatter: DateTimeFormatter): string;
		get(field: ChronoField): number;
		getLong(field: ChronoField): number;
		hashCode(): number;
		hour(): number;
		isSupported(fieldOrUnit: ChronoField | TemporalUnit): boolean;
		minus(): any;
		minus(amountToSubtract: number, unit: TemporalUnit): ZonedDateTime;
		minusDays(days: number): ZonedDateTime;
		minusHours(hours: number): ZonedDateTime;
		minusMinutes(minutes: number): ZonedDateTime;
		minusMonths(months: number): ZonedDateTime;
		minusNanos(nanos: number): ZonedDateTime;
		minusSeconds(seconds: number): ZonedDateTime;
		minusTemporalAmount(amount: TemporalAmount): ZonedDateTime;
		minusWeeks(weeks: number): ZonedDateTime;
		minusYears(years: number): ZonedDateTime;
		minute(): number;
		month(): Month;
		monthValue(): number;
		nano(): number;
		offset(): any;
		plus(): any;
		plus(amountToAdd: number, unit: TemporalUnit): ZonedDateTime;
		plusDays(days: number): any;
		plusHours(hours: number): ZonedDateTime;
		plusMinutes(minutes: number): ZonedDateTime;
		plusMonths(months: number): ZonedDateTime;
		plusNanos(nanos: number): ZonedDateTime;
		plusSeconds(seconds: number): ZonedDateTime;
		plusTemporalAmount(amount: TemporalAmount): ZonedDateTime;
		plusWeeks(weeks: number): any;
		plusYears(years: number): ZonedDateTime;
		query(query: TemporalQuery): any;
		range(field: ChronoField): ValueRange;
		second(): number;
		toJSON(): string;
		toLocalDate(): LocalDate;
		toLocalDateTime(): LocalDateTime;
		toLocalTime(): LocalTime;
		toOffsetDateTime(): OffsetDateTime;
		toString(): string;
		truncatedTo(unit: TemporalUnit): ZonedDateTime;
		until(endExclusive: Temporal, unit: TemporalUnit): number;
		with(): any;
		with(adjuster: TemporalAdjuster): ZonedDateTime;
		with(field: ChronoField, newValue: number): ZonedDateTime;
		withDayOfMonth(dayOfMonth: number): ZonedDateTime;
		withDayOfYear(dayOfYear: number): ZonedDateTime;
		withFixedOffsetZone(): ZonedDateTime;
		withHour(hour: number): ZonedDateTime;
		withMinute(minute: number): ZonedDateTime;
		withMonth(month: number): ZonedDateTime;
		withNano(nanoOfSecond: number): ZonedDateTime;
		withSecond(second: number): ZonedDateTime;
		withTemporalAdjuster(adjuster: TemporalAdjuster): ZonedDateTime;
		withYear(year: number): ZonedDateTime;
		withZoneSameInstant(zone: ZoneId): ZonedDateTime;
		withZoneSameLocal(zone: ZoneId): ZonedDateTime;
		year(): number;
		zone(): ZoneId;
	}
	declare class TextStyle {
		asNormal(): TextStyle;
		asStandalone(): TextStyle;
		isStandalone(): boolean;
	}
	declare class Locale {
		// TODO
	}
	declare class IsoChronology {
		static isLeapYear(prolepticYear: number): boolean;
		resolveDate(fieldValues: any, resolverStyle: any): any;
		equals(other: any): boolean;
		toString(): string;
	}

	declare function nativeJs(date: Date | any, zone?: ZoneId): TemporalAccessor;
	declare function convert(
		temporal: LocalDate | LocalDateTime | ZonedDateTime,
		zone?: ZoneId
	): {
		toDate(): Date,
		toEpochMilli(): number,
		...
	};

	declare function use(plugin: Function): any;
}
