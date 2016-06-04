
package org.sphynfx.core.node;

public class Map<T> extends Node<T> {
    public void addMap(final Mapping<T> mapping) {
        this.mappings.add(mapping);
    }


    public static interface Mapping<T> {
        public void map(final T input);
    }
}
