import React from 'react'

import { ImageTile } from '../../atoms'
import { Link } from 'gatsby'

import styles from './recipe-tile.module.scss'

export const RecipeTile = ({ slug, imageUrl, title }) => {
  return (
    <div className={styles.recipeTile}>
      <Link to={slug}>
        <ImageTile src={imageUrl} />
        {title}
      </Link>
    </div>
  )
}
