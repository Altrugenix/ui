import React from "react";

/**
 * Utility types for polymorphic components (as=... support)
 */

export type AsProp<T extends React.ElementType> = {
  as?: T;
};

export type PolymorphicPropsWithoutRef<
  T extends React.ElementType,
  Props = object,
> = Props & AsProp<T> & React.ComponentPropsWithoutRef<T>;

export type PolymorphicPropsWithRef<
  T extends React.ElementType,
  Props = object,
> = Props & AsProp<T> & React.ComponentPropsWithRef<T>;

export type PolymorphicComponent<T extends React.ElementType, Props = object> = {
  <E extends React.ElementType = T>(
    props: PolymorphicPropsWithRef<E, Props>
  ): React.ReactElement | null;
  displayName?: string;
};
