<?php

/**
 * @file
 * Template to display a views row in vertical_tabs.
 *
 * @ingroup views_templates
 */
?>
<div class="image-collage-grid">
    <ul>
<?php foreach($blocks as $id => $b): ?>
    
        <li class="img-block" >    
            <?php echo $b['img']; ?>
            <div class="quote-bg" data-id="<?php echo $id ?>"></div>
            <div class="quote" data-id="<?php echo $id ?>">
                
                <?php echo $b['quote']; ?>
            </div>
        </li>
<? endforeach; ?>
    </ul>
    <div id="image-collage-overlays">
        <div class="image-collage-overlay-bg">
            
        </div>
        <?php foreach($blocks as $id => $b): ?>
            <div class="overlay" id="overlay-<?php echo $id ?>">
                <div class="image-collage-overlay-container">
                        
                    <span class="image-collage-close-button">X</span>
                    <div class="image-collage-overlay-left">
                        <div class="image-collage-overlay-thumbnail">
                            <?php echo $b['img'] ?>
                        </div>
                    </div>
                    <div class="image-collage-overlay-right">
                        <?php echo $b['bio']; ?>
                    </div>
                
                
                </div>
            </div>
        <? endforeach; ?>
    </div>
</div>