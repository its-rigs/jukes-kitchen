import React from 'react'

import { ImageTile } from '../../atoms'
import { Link } from 'gatsby'

import styles from './recipe-tile.module.scss'

export const RecipeTile = ({ slug, imageUrl, title }) => {
  return (
    <Link to={slug}>
      <div className={styles.recipeTile}>
        <div className={styles.content}>
          {title}
        </div>
        <ImageTile src={imageUrl} />
      </div>
    </Link>
  )
}
