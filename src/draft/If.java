public class If<T> extends Node<T> {
    private final Map<String, Condition<T>> conditions;

    public If() {
        this.conditions = new HashMap<String, Condition<T>>();

    public void setCondition(final String conditionName, 
            final Condition<T> expression) {
        this.conditions.put(conditionName, expression);
    }


    public static interface Condition<T> {
        public booleab eval(final T input);
    }
}
